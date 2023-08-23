// * @ Since: Version 1.0
// * @ Desc: B.A.M.S Main file 
// * @ - This file contains the initialization of the server, connection to the database and the routes
// * @ - Also contains security middlewares (helmet, cors, etc))
// * @ Creator: Carlos Moctezuma aka @crdgom

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import helmet from 'helmet';
import sequelize from './config/database.js';

async function startServer() {

    try{
        await sequelize.sync({ force: false });
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }

    const app = express();
    app.use(helmet());
    app.disable('x-powered-by');
    app.use(express.json());
    app.keepAliveTimeout = 2 * 1000;
    app.use(express.urlencoded({ extended: false }));
    /* app.use(userRoutes); */
    app.listen(process.env.HOST_PORT, () => {
        console.log(`
        
        Server listening on port ${process.env.HOST_PORT}
        
        http://localhost:${process.env.HOST_PORT}
        
        to stop the server press CTRL + C
        
        `);
    });
}

startServer();