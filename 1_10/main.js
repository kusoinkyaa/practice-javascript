const gameCountainer=document.getElementById('game-countainer');
    const gameSelector=document.getElementById('game-selector');
    
    //gameCountainer.textContent="ゲームを選ぶとここに表示されます"

    gameSelector.addEventListener("change",function(){
        gameCountainer.innerHTML = "";
            switch(gameSelector.value){
                case"none":
                    gameCountainer.textContent="ゲームを選ぶとここに表示されます"
                    break;
                    case"click-counter":
                ClickCounterGame();
                break;
                case"number-guess":
                NumberGuessGame();
                break;
                case"RPS":
                RPS();
                break;
                
            }
    })

     