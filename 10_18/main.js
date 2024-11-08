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
            }
    })

     function NumberGuessGame(){
        const randoNumber =Math.floor(Math.random()*100)+1;
        let message= document.createElement("p");
        let input= document.createElement("input");
        input.type = "number";
        input.max = 100;
        input,min = 1;
        input.placeholder = "好きな数字を入力してください (1-100)"
        let button= document.createElement("button");
        button.textContent ="予想"
        button.addEventListener("click",function(){
            const userGuess = parseInt(input.value);
            if(userGuess === randoNumber){
                message.textContent = "正解！"
            }else if(userGuess > randoNumber){
                message.textContent = "値が高いよ！"
            }else if(userGuess < randoNumber){
                message.textContent = "値が小さいよ！"
            }
        })
        
        gameCountainer.appendChild(input);
        gameCountainer.appendChild(button);
        gameCountainer.appendChild(message);
     }

    function ClickCounterGame(){
    let count =0;

let button1=document.createElement("button");
button1.textContent="クリック1";
let button2=document.createElement("button");
button2.textContent="クリック2";

let counter =document.createElement("p");
counter.textContent = count;
button1.addEventListener("click",function(){
    count++;
    counter.textContent = count;
})

button2.addEventListener("click",function(){
    count=count+10;
    counter.textContent = count;
    })
gameCountainer.appendChild(button1);
gameCountainer.appendChild(button2);
gameCountainer.appendChild(counter);
}