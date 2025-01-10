function ClickCounterGame(){
    let count = 0;
    const gameCountainer = document.getElementById("game-container");
 
    let button1 = document.createElement("button");
     button1.textContent = "+1ボタン";
 
     let counter = document.createElement("p");
     counter.textContent = count;
     button1.addEventListener("click",function(){
         count++;
         counter.textContent = count;
     })
     gameCountainer.appendChild(button1);
     gameCountainer.appendChild(counter);
     
 }
 ClickCounterGame();