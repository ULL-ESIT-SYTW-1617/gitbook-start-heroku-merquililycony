var github = require('octonode');
var fs = require('fs');

var userPassword = JSON.parse(fs.readFileSync('.password', 'utf8'));

var client = github.client(userPassword);

client.get('/user', {}, function (err, status, body, headers) {
  console.log(body); //json object
});
