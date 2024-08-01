import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { AccessError, InputError } from './error';

const JWT_SECRET = "ThrekWasHere"

const mongoose = require('mongoose');

let data = {};

// Prisma Client
const prisma = new PrismaClient();

// some dummy route function or something
const dummyFunc = async(input: string) => {
    if (input === '') {
        throw new InputError('input cannot be empty');
    }
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


}

const register = async (email: string, password: string, name: string) => {
    if (!email) {
        throw new InputError("Must provide an email for registration");
    } else if (!password) {
        throw new InputError("Must provide a password for registration");
    } else if (!name) {
        throw new InputError("Must provide a name for registration");
    }


}

module.exports = connectDB;

export { dummyFunc, login, register }