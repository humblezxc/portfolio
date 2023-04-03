import {Sequelize} from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.DB_DATABASE!, process.env.DB_USERNAME!, process.env.DB_PASSWORD!, {
    host: process.env.DB_HOST!,
    dialect: 'mysql'
});
db.authenticate()
    .then(() => {
        console.log('Database connected!');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

export default db;
