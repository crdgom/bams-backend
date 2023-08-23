// * @ Since: Version 1.0
// * @ Desc: B.A.M.S Database connection 
// * @ - This file contains the connection to the database
// * @ Creator: Carlos Moctezuma aka @crdgom

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
});

export default sequelize;
