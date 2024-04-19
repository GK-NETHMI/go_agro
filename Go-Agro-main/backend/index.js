import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import complaintRoute from './router/ComplaintRoute.js';
import reviewRoute from './router/reviewRoute.js';
import farmerRoute from './router/FarmerRoute.js';
import notificationRoute from './router/notificationRoute.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors());

const corsOption = {
    origin: true
};

app.listen(port, () => {
    console.log('server is running ' + port);
});

//database connection
const URL = process.env.MONGO_URL;

mongoose.connect(URL, {});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb connection successful");
});

app.use('/complaints', complaintRoute);
app.use('/farmers', farmerRoute);
app.use('/reviews', reviewRoute);
app.use('/notifications', notificationRoute);

