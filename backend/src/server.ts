import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.use(express.static(path.resolve('../frontend/build')));

app.use(cors({ credentials:true, origin:'*' }));
app.use(express.json());
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(()=> console.log(`Server running at port ${process.env.PORT}`));
