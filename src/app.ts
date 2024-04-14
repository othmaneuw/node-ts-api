import express from 'express';
import config from "config";
import connectToDB from './utils/connect';
import logger from "./utils/logger";
import routes from './routes';

const app = express();

const port = config.get<number>('port');

app.listen(port,async ()=>{
    logger.info(`App is running at http://localhost:${port}`);
    await connectToDB();
    routes(app);
})