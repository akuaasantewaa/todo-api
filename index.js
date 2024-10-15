
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';

// Connect to database
await mongoose.connect('mongodb+srv://todo-api:todo-api@databasecluster.lona3.mongodb.net/todo-db?retryWrites=true&w=majority&appName=Databasecluster');

// create an express app
const app = express();

// Use routes
app.use(todoRouter);
app.use(userRouter);

// listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});