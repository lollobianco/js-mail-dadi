// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let registeredUsers = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com', 'minni@gmail.com'];
let playerWinCounter = [];
let botWinCounter = [];
console.log(registeredUsers)

let userEmail = document.getElementById('exampleInputEmail1');

let accessButton = document.getElementById('accessButton');
let registerButton = document.getElementById('registerButton');

let alerts = document.getElementById('alerts');
let form = document.getElementById('form'); 
let winner = document.getElementById('winner');
let numberPlayer = document.getElementById('numberPlayer');
let numberBot = document.getElementById('numberBot');

accessButton.addEventListener('click', function(){



      let emailValue = userEmail.value;
      console.log(emailValue)


      if (emailValue == ''){
         alerts.innerHTML = `<div class="alert alert-danger mt-2" role="alert">Inserisci la tua E-mail!</div>`;
         setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);

         } else{
            
            let found = 'false';

            for (let i = 0; i < registeredUsers.length; i++){
               console.log(emailValue)

               if(found == 'false'){

                  if (registeredUsers[i] == emailValue){

                     found = 'true';

                     alerts.innerHTML = `<button type="submit" class="btn btn-warning fs-5 mt-2" id="diceGameButton" onclick="diceGameStarter();return false">Gioca</button><div class="alert alert-success mt-2" role="alert">Accesso Effettuato</div>`

                  }  else {
                     alerts.innerHTML = `<div class="alert alert-danger mt-2" role="alert">Registrati!</div>`;
                     setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);
                     }
               }  
               
            }
         }

});

registerButton.addEventListener('click', function(){

   let emailValue = userEmail.value;

   if (emailValue == ''){
      alerts.innerHTML = `<div class="alert alert-danger mt-2" role="alert">Inserisci la tua E-mail!</div>`;
      setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);

   } else{
      registeredUsers.push(emailValue);
      alerts.innerHTML = `<div class="alert alert-success mt-2" role="alert">Registrato, ora accedi per giocare</div>`;
      setTimeout(() => document.querySelector('.alert').classList.add('hide'), 1500);
      console.log(registeredUsers)        
   }
})



let playerName = document.getElementById("playerName");

function diceGameStarter(){

   let access = document.getElementById('access');
   access.classList.add("d-none");

   let diceGame = document.getElementById('diceGame');
   diceGame.classList.remove("d-none");

   playerName.innerHTML = `${userEmail.value}`;

}

function playDiceGame(){
   
   let playerDice = Math.round(Math.random() * 5) + 1;
   console.log(playerDice)
   numberPlayer.innerHTML = `${playerDice}`;
   
   let computerDice = Math.round(Math.random() * 5) + 1;
   console.log(computerDice)
   numberBot.innerHTML = `${computerDice}`;

   let i = 0;

   if(computerDice > playerDice){
      winner.innerHTML = `<div id="playerWinner" class="alert text-center alert-warning mt-2 px-5" role="alert">Bot ha vinto</div>`;
      i = i + 1;
      botWinCounter.push(i);
      document.getElementById('botWinCounter').innerHTML = `${botWinCounter.length}`;

      
   } else if(computerDice < playerDice){
      winner.innerHTML = `<div id="botWinner" class="alert text-center alert-warning mt-2 px-5" role="alert">${userEmail.value} ha vinto</div>`;
      i = i + 1;
      playerWinCounter.push(i);
      document.getElementById('playerWinCounter').innerHTML = `${playerWinCounter.length}`;
      
   }  else{
      winner.innerHTML = `<div id="draw" class="alert text-center alert-warning px-5 mt-2" role="alert">Pareggio</div>`;      
   }

}

function goBack(){
   let access = document.getElementById('access');
   access.classList.remove("d-none");

   let diceGame = document.getElementById('diceGame');
   diceGame.classList.add("d-none");
} 

function dark(){
   let bodyBackground = document.getElementById('body');
   let sun = document.getElementById('sun');
   let moon = document.getElementById('moon');
   let back = document.getElementById('back');
   let playerCard = document.getElementById('playerCard');
   let botCard = document.getElementById('botCard');


   bodyBackground.classList.add('darkBg', 'text-white');
   moon.classList.add('d-none');
   sun.classList.remove('d-none'); 
   back.classList.add('text-white');
   back.classList.remove('text-black');
   playerCard.classList.add('darkCardBg');
   botCard.classList.add('darkCardBg');
   numberBot.classList.add('numberBadgeColor');
   numberPlayer.classList.add('numberBadgeColor');

}

function light(){
   let bodyBackground = document.getElementById('body');
   let sun = document.getElementById('sun');
   let moon = document.getElementById('moon');
   let back = document.getElementById('back');
   let playerCard = document.getElementById('playerCard');
   let botCard = document.getElementById('botCard');


   bodyBackground.classList.remove('darkBg', 'text-white');
   moon.classList.remove('d-none');
   sun.classList.add('d-none');
   back.classList.remove('text-white');
   back.classList.add('text-black');
   playerCard.classList.remove('darkCardBg');
   botCard.classList.remove('darkCardBg');
   numberBot.classList.remove('numberBadgeColor');
   numberPlayer.classList.remove('numberBadgeColor'); 
}

// function reset(){

//    let playerWinCounter = [];
//    let botWinCounter = [];

//    // document.getElementById('playerWinCounter') = `${playerWinCounter.length - 1}`;
//    // document.getElementById('botWinCounter') = `${botWinCounter.length - 1}`;

//    document.getElementById('playerWinCounter').innerHTML =`Contatore vincite`;
//    document.getElementById('botWinCounter').innerHTML = `Contatore vincite`;
// }





