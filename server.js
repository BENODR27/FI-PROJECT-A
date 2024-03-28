const express = require('express');

//api rate limitter
const rateLimit = require('express-rate-limit');

require('dotenv').config();
const cors = require('cors');


const app = express();


// Define rate limiter options
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 50, // limit each IP to 50 requests per windowMs
    message: 'Too many requests, please try again later.'
  });
  // Apply the rate limiter to all requests
app.use(limiter);

const port = process.env.PORT || 8082;


// Define your CORS options
const corsOptions = {
  origin: '*', // Replace with the origin(s) you want to allow
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  optionsSuccessStatus: 200 // optional
};

// Use the CORS middleware with the defined options
app.use(cors(corsOptions));


app.use(express.json());


const countriesRouter = require('./routes/countries');
const statesRouter = require('./routes/states');
const zonesRouter = require('./routes/zones');

  app.use('/countries', countriesRouter);
  app.use('/states', statesRouter);
  app.use('/zones', zonesRouter);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
