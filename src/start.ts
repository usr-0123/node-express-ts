import  dotenv from 'dotenv';
import express from 'express';
import {logger} from "./utils/logger";

export const startServer = () => {
    try {
        const app = express();
        dotenv.config();
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server started on port 8080`));
        // TODO: Call an external logs service here
    } catch (e) {
        logger.error('An error occurred while starting the server on port 8080.');
        // TODO: Call an external logs service here
    }
}