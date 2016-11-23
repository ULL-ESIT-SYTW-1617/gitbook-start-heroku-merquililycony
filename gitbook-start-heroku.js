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
  var general = args + args1 + args2;


  exec('curl ' + general, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  console.log("fin exec");

var id_;
//var pass = readlineSync.question('Introduzca contraseña de github: ');
var ghuser;

//console.log(exec('ls -la'));
var i,u,d,di;
var dir = 'http://www.netscape.com/index.html';
var mifuncion = function(){
      //var args = " -d '{'title': 'Test' }' -H 'Content-Type: application/json' http://125.196.19.210:3030/widgets/test";

  var args = " -i -u ";
  var ar = " -d ";
 // var args1 = ''{"scopes": ["repo", "user"], "note":"mytoken"}'' ;
 //var args = ["-i -u ALU0100673647 -d'", "-H 'Content-Type: application/json'", "http://125.196.19.210:3030/widgets/test"];

  var args2 = " https://api.github.com/authorizations >> fim.json";
  var general = args +usuario + ar + "'"+ '{"scopes": ["repo", "user"], "note":"fimtoken"}'+ "'" + args2;
console.log('curl'+ general);
console.log("password: ");

//console.log(args);
//exec('curl'+general);
    exec('curl ' + general, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      //curl.close();
      console.log('stderr: ' + stderr);
      curl.close();
      if (error !== null) {
        console.log('exec error: ' + error);
      }

    });

};

mifuncion();



//COGER TOKEN
var json = JSON.parse(fs.readFileSync('mitoken.json','utf8'))
var token = json.token;


console.log("MI TOKEN");
console.log(token);

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
