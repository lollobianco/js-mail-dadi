// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let registeredUsers = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com', 'minni@gmail.com'];

let userEmail = document.getElementById('exampleInputEmail1');

let accessButton = document.getElementById('accessButton');

accessButton.addEventListener('click', function() {

   if (userEmail.value == ''){
      alert('Inserisci la tua E-mail!!!');
      return;

   } else{
   
      for (let i = 0; i <= registeredUsers.length; i++){
         if (registeredUsers[i] == userEmail.value) {
            alert('Sei registrato!!');
            return;
   } else{
      alert('registrati!!');
      return;
   }
   }
   }


});
