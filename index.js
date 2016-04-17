var jwt = require('jwt-simple');
var payload = { foo: 'bar' };
var secret = 'tpA8HFIZg6DUvt0wxUcZvH6NaKpGbFE7pt253UB2';
 
// encode 
var token = jwt.encode(payload, secret);
 
 var fbToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InByb3ZpZGVyIjoicGFzc3dvcmQiLCJ1aWQiOiIwM2FmZDBkYi03YTdmLTQ0MmQtODM0Yi1kZWRkZTQwYWFmYWYifSwiaWF0IjoxNDYwOTA2MDEwfQ.nSg4muXFmx3xFAGzvCdj7lvw4Dcq97ojxem3w0N40_U'
 
// decode 
var decoded = jwt.decode(fbToken, secret);
console.log(decoded); //=> { foo: 'bar' } 