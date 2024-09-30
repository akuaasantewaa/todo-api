 
import express from 'express';  

// create an express app
const app = express();

// define routes
app.get('/hello', function (req, res, next) {
   console.log(req.headers)
   res.json('You visited the hello endpoint'); 
});

// define routes
app.get('/goodbye', function(req, res, next) {
    console.log(req.query)
    res.json('All the best');
});


// listen for incoming requests
app.listen(3000, function () {
    console.log('App is listening on port 3000');
});