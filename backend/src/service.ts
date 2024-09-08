import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { AccessError, InputError } from './error';

const JWT_SECRET = "ThrekWasHere"

const mongoose = require('mongoose');

let data = {};

interface User {
    id: string,
}

// let users: User[] = [];

// Prisma Client
const prisma = new PrismaClient();

// some dummy route function or something
const dummyFunc = async(input: string) => {
    if (input === '') {
        throw new InputError('input cannot be empty');
    }
}

const getUserIdFromEmail = async(email: string) => {
    const getUser: User | null = await prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          id: true,
        },
    })
    return getUser;
} 

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
           'mongodb+srv://ngtaneil:WvD34MO2YfecGMc8@users.2zfatv2.mongodb.net/Users?retryWrites=true&w=majority&appName=Users', 
        );
        console.log('Connected with MongoDB');
        // console.log(`Connected with mongoDB: ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const login = async (email: string, password: string) => {
    if (!email) {
        throw new InputError("Must have a valid email input");
    } else if (!password) {
        throw new InputError("Must have a valid password input");
    }

    const uniqueId = await getUserIdFromEmail(email);
    if (uniqueId === null) {
        throw new InputError('Invalid email!');
    } else {
        const res: {password: string} | null = await prisma.user.findUnique({
            where:{
                id: uniqueId.id
            },
            select: {
                password: true,
            },
        })

        if (res) {
            if (res.password !== password) {
                throw new InputError('Incorrect password');
            } else {
                const token = jwt.sign({uniqueId}, JWT_SECRET, {algorithm: 'HS256'});
                return {token};
            }
        } else {
            throw new Error('Login access failed');
        }
    }
}

const register = async (email: string, password: string, name: string) => {
    if (!email) {
        throw new InputError("Must provide an email for registration");
    } else if (!password) {
        throw new InputError("Must provide a password for registration");
    } else if (!name) {
        throw new InputError("Must provide a name for registration");
    }

    const emailUse = await getUserIdFromEmail(email);
    if (emailUse) {
        throw new InputError('Email already exists');
    }

    // await prisma.user.create({
    //     data: {
    //         email: email,
    //         password: password,
    //         name: name
    //     }
    // }).then(async () => {
    //     await prisma.$disconnect()
    // }).catch(async (e) => {
    //     console.error(e)
    //     await prisma.$disconnect()
    //     process.exit(1)
    // })

    const uniqueId = await getUserIdFromEmail(email);
    if (uniqueId !== null) {
        const token = jwt.sign({uniqueId}, JWT_SECRET, {algorithm: 'HS256'});
        return {token};
    } else {
        throw new Error('User creation failed'); 
    }
}

module.exports = connectDB;

export { dummyFunc, login, register }