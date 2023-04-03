import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import router from "./routes";

dotenv.config();

const app = express();

app.use(cors({credentials: true, origin: '*'}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.use(express.json());
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.use(bodyParser.json());
app.use(express.json());
app.use(router);
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`));
