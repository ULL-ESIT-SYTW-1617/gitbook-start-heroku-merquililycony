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
var Curl = require('node-libcurl').Curl;
var curl = new Curl();



var usuario = readlineSync.question('Introduzca el USUARIO de github: ');

var mifuncion = function(){

  //var args = " -i -u alu0100536690 -d ";
  var args = " -i -u "+usuario+" -d ";
  var args1 = '\'{"scopes": ["repo", "user"], "note":"mlc"}\'';
  var args2 = " https://api.github.com/authorizations >> mlc.json";
  var crear_token = args + args1 + args2;

  console.log("Introduzca su contraseña de github: ")
  exec('curl ' + crear_token, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);

  });
  console.log("fin exec");
};
//exports.start = w;
mifuncion();



//COGER TOKEN
//var json = JSON.parse(fs.readFileSync('mitoken.json','utf8'))
//var token = json.token;
//console.log("MI TOKEN");
//console.log(token);

client.get('/users/'+usuario, {}, function (err, status, body, headers) {


 var ghuser;
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
