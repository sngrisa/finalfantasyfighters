import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import { connectWithMongoDB } from './config/moongoseConfig';
import router from './routes';

const port: number = 3000;
const portPage: number = 5173;

connectWithMongoDB();

const app = express();

// CORS middleware
app.use(cors({ origin: `http://localhost:${portPage}` }));

// Custom headers middleware
app.use((_req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', router);

// Start the server
app.listen(port, () => {
    console.info(`Listening on port ${port}`);
});