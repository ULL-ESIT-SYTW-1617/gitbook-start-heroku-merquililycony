var github = require('octonode');
var client = github.client();
const readline = require('readline');
var readlineSync = require('readline-sync');
var fs = require('fs');
var path = require('path');
var gulp = require(path.join(__dirname,'/', 'gulpfile.js'));
var deasync = require('deasync');
var cp = require('child_process');
var exec = deasync(cp.exec);
//var findup = require('findup-sync');
//var objects = require('./objects');



var usuario = readlineSync.question('Introduzca el USUARIO de github: ');

var id_;
var pass = readlineSync.question('Introduzca contraseña de github: ');
var ghuser;

console.log(exec('ls -la'));

//function tok(usuario){

//console.log(exec('ls -la'));
// curl -i -u usuario -d '{"scopes": ["repo", "user"], "note":"mytoken"}' https://api.github.com/authorizations >> mytoken.json

//}

//exec(tok);
//gulp.generate_token(); //Crear tarea que genere json con el token

//COGER TOKEN
  var json = JSON.parse(fs.readFileSync('mitoken.json','utf8'))
  var token = json.token;
  console.log("MI TOKEN");
  console.log(token);

client.get('/users/'+usuario, {}, function (err, status, body, headers) {



  //console.log(body); //json object
   ghuser = client.user(usuario);
  // console.log(body); //json object
  //console.log("BODY NAME")
//  console.log(body.name); //json object
//  id_ = body.id;
//  console.log(id_);
// console.log("HOLA: ", ghuser);
});


var client = github.client({
  username: usuario,
  password: pass
});


client.get('/user', {}, function (err, status, body, headers) {
  //console.log(body); //json object
});
var client = github.client('someaccesstoken');
