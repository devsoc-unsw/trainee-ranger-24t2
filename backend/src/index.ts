import express from 'express';
import cors from 'cors';

const PORT = 5000;

const app = express();
app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true
}));

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/message', (req, res) => {
    res.json({ message: "Hello Shrek (Trek)!" });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});