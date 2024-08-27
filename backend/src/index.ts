import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { AccessError, InputError } from './error';
import { MongoClient } from 'mongodb';
import { login, register } from './service';
// import mongoose from 'mongoose';

const PORT = 5000;

const app = express();
const connectDB = require('./service.ts')
// const mon = require('mongoose');
app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true
}));
app.use(express.json());

const errorHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      if (error instanceof InputError) {
        res.status(400).send({ error: error.message });
      } else if (error instanceof AccessError) {
        res.status(403).send({ error: error.message });
      } else {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
      }
    }
  };

app.get('/', (req, res) => {
  res.json("Hello world!");
});

app.get('/message', (req, res) => {
  res.json({ message: "Hello Shrek (Trek)!" });
});

app.post('/auth/login', 
  errorHandler(async (req, res) => {
    const {email, password} = req.body;
    const token = await login(email, password);
    res.json(token);
  }),
)

app.post('/auth/register',
  errorHandler(async (req, res) => {
    const {email, password, name} = req.body;
    const token = await register(email, password, name);
    res.json(token);
  }),
)
connectDB();

// Unmatched routes
app.use((req, res) => {
  res.status(404).send({ error: "Not found "});
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});