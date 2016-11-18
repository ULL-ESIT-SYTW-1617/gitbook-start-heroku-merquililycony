var github = require('octonode');
var client = github.client();
const readline = require('readline');
var readlineSync = require('readline-sync');

/********** Autenticacion usuario *********************************/
var usuario = readlineSync.question('Introduzca el USUARIO de github: ');
var pass = readlineSync.question('Introduzca contraseña de github: ');
var ghuser;
client.get('/users/'+usuario, {}, function (err, status, body, headers) {
  //console.log(body); //json object
   ghuser = client.user(usuario);
// console.log("HOLA: ", ghuser);
});


var client = github.client({
  username: usuario,
  password: pass
});

/**********************************************************************/
client.get('/user', {}, function (err, status, body, headers) {
  console.log(body); //json object
});
var client = github.client('someaccesstoken');

client.get('/user', {}, function (err, status, body, headers) {
 // console.log(body); //json object
});

