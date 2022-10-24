// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let registeredUsers = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com', 'minni@gmail.com'];
console.log(registeredUsers)

let userEmail = document.getElementById('exampleInputEmail1');

let accessButton = document.getElementById('accessButton');
let registerButton = document.getElementById('registerButton');

let alerts = document.getElementById('alerts');

accessButton.addEventListener('click', function(){

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

registerButton.addEventListener('click', function(){

   let emailValue = userEmail.value;

   if (emailValue == ''){
      alert('Inserisci la tua E-mail!!!');
      return;

   } else{
      registeredUsers.push(emailValue);
      alerts.innerHTML = `<div class="alert alert-success w-25 mt-2" role="alert">Registrato, ora accedi per giocare</div>`;
      console.log(registeredUsers)        
   }
})
