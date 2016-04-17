var jwt = require('jwt-simple');
var jwtE = require('express-jwt');
var express = require('express')
var app = express()

var payload = { foo: 'bar' };
var secret = 'tpA8HFIZg6DUvt0wxUcZvH6NaKpGbFE7pt253UB2';



app.get('/', function (req, res) {
    res.json({ oelo: 'kykelyn' })
})

app.get('/protected',
    jwtE({ secret: secret }),
    function (req, res) {
        res.sendStatus(200);
    });

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
    }
});


// encode 
var token = jwt.encode(payload, secret);

var fbToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InByb3ZpZGVyIjoicGFzc3dvcmQiLCJ1aWQiOiIwM2FmZDBkYi03YTdmLTQ0MmQtODM0Yi1kZWRkZTQwYWFmYWYifSwiaWF0IjoxNDYwOTA2MDEwfQ.nSg4muXFmx3xFAGzvCdj7lvw4Dcq97ojxem3w0N40_U'

// decode 
var decoded = jwt.decode(fbToken, secret);
console.log(decoded); //=> { foo: 'bar' } 

var fbTokenAlter = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InByb3ZpZGVyIjoicGFzc3dvcmQiLCJ1aWQiOiIwM2FmZDBkYi03YTdmLTQ0MmQtODM0Yi1kZWRkZTQwYWFmYWYifSwiaWF0IjoxNDYwOTA2MDEwfQ.nSg4muXFmx3xxxFAGzvCdj7lvw4Dcq97ojxem3w0N40_U'


try {
    var wrongDecode = jwt.decode(fbTokenAlter, secret);
}
catch (e) {
    // statements to handle any exceptions
    console.error(e); // pass exception object to error handler
}


app.listen(3003, function (params) {
    console.log('listening, ', params)
})