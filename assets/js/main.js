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

   // for (let i = 0; i < registeredUsers.length; i++){

      let emailValue = userEmail.value;
      console.log(emailValue)


      if (emailValue == ''){
         alerts.innerHTML = `<div class="alert alert-danger w-25 mt-2" role="alert">Inserisci la tua E-mail!</div>`;
         setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);

         } else{
            
            let found = 'false';

            for (let i = 0; i < registeredUsers.length; i++){
               console.log(emailValue)

               if(found == 'false'){

                  if (registeredUsers[i] == emailValue){

                     found = 'true';

                     alerts.innerHTML = `<button type="submit" class="btn btn-warning mt-2" id="diceGame" onclick="diceGame();return false">Gioca</button><div class="alert alert-success w-25 mt-2" role="alert">Accesso Effettuato</div>`;
                     setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);

                  }  else {
                     alerts.innerHTML = `<div class="alert alert-danger w-25 mt-2" role="alert">Registrati!</div>`;
                     setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);
                     }
               }  
               
            }
         }

});

registerButton.addEventListener('click', function(){

   let emailValue = userEmail.value;

   if (emailValue == ''){
      alerts.innerHTML = `<div class="alert alert-danger alert-dismissible fade show w-25 mt-2" role="alert">Inserisci la tua E-mail!</div>`;
      setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);

   } else{
      registeredUsers.push(emailValue);
      alerts.innerHTML = `<div class="alert alert-success w-25 mt-2" role="alert">Registrato, ora accedi per giocare</div>`;
      setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);
      console.log(registeredUsers)        
   }
})




function diceGame(){

   let access = document.getElementById('access');
   access.classList.add("d-none");

}

function playDiceGame(){

   let playerDice = Math.round(Math.random() * 6) + 1;
   console.log(playerDice)
   
   let computerDice = Math.round(Math.random() * 6) + 1;
   console.log(computerDice)

}





