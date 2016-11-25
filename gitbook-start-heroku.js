var github = require('octonode');
var client = github.client();
var readlineSync = require('readline-sync');
var fs = require('fs');
var path = require('path');
var gulp = require(path.join(__dirname,'/', 'gulpfile.js'));
const child_process = require('child_process');
var Curl = require('node-libcurl').Curl;
var curl = new Curl();



var usuario = readlineSync.question('Introduzca el USUARIO de github: ');
var password = readlineSync.question('Introduzca la contraseña de github: ');


//var args = " -i -u alu0100536690 -d ";
var args = " -u "+usuario+":"+password+" -d ";
var args1 = '\'{"scopes": ["repo", "user"], "note":"mlc"}\'';
var args2 = " https://api.github.com/authorizations >> mlc.json";
var crear_token = args + args1 + args2;

  //TENEMOS QUE HACER UN CALLBACK, PROMESA O UTILIZAR LA LIBRERÍA Async y Await
  //PARA QUE NO CONTINUE HASTA QUE NO FINALICE LA FUNCIÓN
   var workerProcess = child_process.exec('curl ' + crear_token,function
      (error, stdout, stderr) {

      if (error) {
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }

      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);


   });
      workerProcess.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);

   });




//COGER TOKEN
//child_process.exec('sed -i "1,25d" mlc.json');//elimina de la linea 1 a la 25
var json = JSON.parse(fs.readFileSync('mlc.json','utf8'))

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



client.get('/user', {}, function (err, status, body, headers) {
//console.log(body); //json object
});
var client = github.client('someaccesstoken');
