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

//var findup = require('findup-sync');
//var objects = require('./objects');



var usuario = readlineSync.question('Introduzca el USUARIO de github: ');

var id_;
var pass = readlineSync.question('Introduzca contraseña de github: ');
var ghuser;

//console.log(exec('ls -la'));
var i,u,d,di;
var dir = 'http://www.netscape.com/index.html';
var mifuncion = function(){
      //var args = " -d '{'title': 'Test' }' -H 'Content-Type: application/json' http://125.196.19.210:3030/widgets/test";

  var args = " -i -u ALU0100673647 -d ";
 // var args1 = ''{"scopes": ["repo", "user"], "note":"mytoken"}'' ;
  var args2 = " https://api.github.com/authorizations >> e.json";
  var general = args + "'"+ '{"scopes": ["repo", "user"], "note":"etoken"}'+ "'" + args2;
console.log('curl'+ general);
//console.log(args);
//exec('curl'+general);
    exec('curl ' + general, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
    console.log("fin exec");
};
//exports.start = w;
mifuncion();

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
