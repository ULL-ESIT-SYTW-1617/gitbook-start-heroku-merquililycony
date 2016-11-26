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
var password = readlineSync.question('Introduzca su contraseña de github: ', { hideEchoBack: true });

//var args = " -i -u alu0100536690 -d ";
var args = " -u "+usuario+":"+password+" -d ";
var args1 = '\'{"scopes": ["repo", "user"], "note":"'+usuario+'"}\'';
var args2 = " https://api.github.com/authorizations >> "+usuario+".json";
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

  //  console.log('stdout: ' + stdout);
  //  console.log('stderr: ' + stderr);
    //COGER TOKEN
    var json = JSON.parse(fs.readFileSync(usuario+'.json','utf8'))
    var token = json.token;    
    console.log("Token usuario: "+token);

 });
    workerProcess.on('exit', function (code) {
    //console.log('Child process exited with exit code '+code);

 });



//OBTENER DATOS PÚBLICOS DE UN USUARIO DE GITHUB
client.get('/users/'+usuario, {}, function (err, status, body, headers) {

var ghuser = client.user(usuario); //Datos públicos del usuario
//console.log(body);
var id_ = body.id;
console.log("Id usuario "+id_);

});
