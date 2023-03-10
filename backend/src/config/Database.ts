import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize('new_schema'!, 'root'!, 'password'!, {
    host: '127.0.0.1'!,
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
