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
var Curl = require( 'node-libcurl' ).Curl;
var curl = new Curl();

//var findup = require('findup-sync');
//var objects = require('./objects');



var usuario = readlineSync.question('Introduzca el USUARIO de github: ');

var id_;
var pass = readlineSync.question('Introduzca contraseña de github: ');
var ghuser;

//console.log(exec('ls -la'));
var w;
var mifuncion = function(){
   console.log(exec('ls -la'));
  //return w;

// exec('ls -la');
  // var p = '-i';
  // curl()
};
//exports.start = w;
mifuncion();
// var curl = new Curl(),
//     close = curl.close.bind( curl );

// curl.setOpt( curl.option.URL, 'https://api.github.com/authorizations' );
// curl.setOpt()
// curl.setOpt( curl.option.HTTPPOST, [
//     {"scopes": ["repo", "user"], "note":"mytoken"}
// ]);

// curl.on( 'end', close );
// curl.on( 'error', close );
// var d =  '{"scopes": ["repo", "user"], "note":"mytoken"}';
// console.log(exec('curl -i -u ALU0100673647 -d d https://api.github.com/authorizations'));
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
