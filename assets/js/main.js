// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let registeredUsers = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com', 'minni@gmail.com'];
console.log(registeredUsers)

let userEmail = document.getElementById('exampleInputEmail1');

let accessButton = document.getElementById('accessButton');

accessButton.addEventListener('click', function() {

   let emailValue = userEmail.value;
   console.log(emailValue)
   console.log(registeredUsers.length)

   for (let i = 0; i < registeredUsers.length; i++){

      if (emailValue == ''){
            alert('Inserisci la tua E-mail!!!');
            return;

         } else if (emailValue == registeredUsers[i]){
            alert('Registrato'); 
            return;        
         } 
   }

   alert('Registrati');
   return;
   
});
