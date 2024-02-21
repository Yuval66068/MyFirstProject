let btnLogin = document.querySelector('.btn_login')
let btnRegistar = document.querySelector('.btn_registar')
let passwords = [];
let usernames = [];

function addUser(){

var newUser = document.querySelector('.input_username').value;
var newPass = document.querySelector('.input_password').value;

   usernames = usernames.concat(newUser);
   passwords = passwords.concat(newPass);
   document.getElementById("usrName" + usernames).innerHTML = usernames;
   console.log(usernames);
   console.log(passwords);

}

btnRegistar.addEventListener('click', addUser);