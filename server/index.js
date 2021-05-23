import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import workoutRoutes from './routes/workouts.js';


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/workouts', workoutRoutes);
console.log("kommer til index")

const CONNECTION_URL = "mongodb+srv://mern:mongodb@cluster0.hp4kw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log("Server is running")))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);