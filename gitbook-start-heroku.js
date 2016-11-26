var github = require('octonode');
var client = github.client();
var readlineSync = require('readline-sync');
var fs = require('fs');
var path = require('path');
var gulp = require(path.join(__dirname,'/', 'gulpfile.js'));
const child_process = require('child_process');
//var cp = require('child_process');
//var deasync = require('deasync');
//var exec = deasync(cp.exec);
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

    //CREAR REPOSITORIO REMOTO EN GITHUB CON EL TOKEN
    var repo_name = "tac-tac-tac";
    //var pwd = child_process.exec('pwd');
    //var repo_name = path.basename(pwd);
    //console.log(repo_name);


    //console.log("EL DIRECTORIO ES"+repo_name);

    //curl -u 'usuario:token' https://api.github.com/user/repos -d '{"name":"nombre_repo"}'
    var addrepo = " -u \'"+usuario+":"+token+"\' https://api.github.com/user/repos -d "+'\'{"name":"'+repo_name+'"}\'';
    child_process.exec('curl ' + addrepo);


 });

    workerProcess.on('exit', function (code) {
    //console.log('Child process exited with exit code '+code);

 });



//UTILIZANDO LA LIBRERÍA OCTONODE
/*var client = github.client({
  username: usuario,
  password: password
});

client.get('/user', {}, function (err, status, body, headers) {
  //console.log(body);
  console.log("Id de usuario: "+body.id); //json object
});*/
