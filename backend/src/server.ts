import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import router from "./routes";

dotenv.config();

const app = express();

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.use(cors({credentials: true, origin: '*'}));
app.use(express.json());
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(router);
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(() => console.log(`Server running at port ${process.env.PORT}`));
