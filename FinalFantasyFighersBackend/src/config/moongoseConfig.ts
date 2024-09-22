import { connect } from 'mongoose';

const urlDB: string = 'mongodb://localhost:27017/finalfantasyfighters';

const connectWithMongoDB = async (): Promise<void> => {
    try {
        await connect(urlDB);
        console.info('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export { connectWithMongoDB };