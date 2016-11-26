var github = require('octonode');
var client = github.client();
var readlineSync = require('readline-sync');
var fs = require('fs');
var path = require('path');
var gulp = require(path.join(__dirname,'/', 'gulpfile.js'));
var exec = require('child_process').exec;
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



exec('curl ' + crear_token, function(error, stdout, stderr){
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
  //var pwd = "Home/hola/mundo/pepito-perez"
  var nrepo = require(path.join(__dirname,'/','package.json'))
   var addrepo;
   var repo_name = nrepo.nombre_dir;
   console.log(repo_name);
  function pwd(){

  //  exec('pwd', function(error, stdout, stderr){

  //   repo_name = path.basename(stdout);
    //  console.log("Se ejecutó pwd: "+repo_name);

 //-u 'alu0100536690:esperanza85' https://api.github.com/user/repos -d '{"name":"gitbook-start-heroku-merquililycony"}'

      //addrepo = " -u \'"+usuario+":"+password+"\' https://api.github.com/user/repos -d "+'\'{"name":"'+repo_name+'"}\'';
      //console.log("Se ejecutó repo_name: "+addrepo);


  //  });
    exec('curl' + " -u \'"+usuario+":"+password+"\' https://api.github.com/user/repos -d "+'\'{"name":"'+repo_name+'"}\'', function(error, stdout, stderr){
    console.log("No se si se ejecuta"+ repo_name);
    });

}
pwd();


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
