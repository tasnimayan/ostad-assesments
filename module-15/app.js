
require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')


// Express App
const app = express();

// Import routers
const studentRouter = require('./src/routes/api')


//    =========    MIDDLEWARE     ========

console.log(path.join(__dirname, './public'));
app.use(express.static(path.join(__dirname, './public')));

const limiter = rateLimit({
	windowMs: 30 * 60_000,
	max: 5000,
	message: 'Too many requests from this IP, please try again later',
});


app.use(limiter);
app.use(cors());

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());


app.use(mongoSanitize());

// ========   Database Connection   ========
mongoose
  .connect(process.env.DATABASE, {autoIndex:false})
  .then(() => console.log('MONGODB LOCAL connection successful'))
  .catch(err => console.log(err));

mongoose.connection.on('disconnected', () => {
	console.log("======= Database Disconnected ======");
});

app.use('/api/users', studentRouter);


app.all('*', (req, res, next) => {
	const err = new Error(`No route found at ${req.originalUrl}`);
	if (!err.statusCode) err.statusCode = 404;
	next(err);
});

//* GLOBAL ERROR MIDDLEWARE
app.use((err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	res.status(err.statusCode).send({ message: err.message });
});

module.exports = app;