const gameSelector = document.getElementById('game-select');
const select = document.createElement("select");
select.name = "games";
select.id = "game-select";
const options = [
    { value: "", text: "--ゲームを選択してください--"},
    { value: "clicker",text: "クリッカーゲーム"},
    { value: "number-guess", text: "数当てゲーム"}
];
options.forEach(optionData => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    select.appendChild(option);
});
gameSelector.appendChild(select);


//const gameCountainer = document.getElementById('game-container');
gameSelector.addEventListener('change',function() {
    gameCountainer.innerHTML = '';
    switch (gameSelector.value){
        case 'number-guess':
            startNumberGuessgame();
            break;
            case 'clicker':
                ClickCounterGame();
                break;
    }
});




function ClickCounterGame(){
    let count = 0;
    const gameCountainer = document.getElementById("game-container");
 
    let button1 = document.createElement("button");
     button1.textContent = "+1ボタん";

     let button2 = document.createElement("button");
     button2.textContent = "+10ボタン";

     let button3 = document.createElement("button");
     button3.textContent = "リセットボタン";
 
     let counter = document.createElement("p");
     counter.textContent = count;

     button1.addEventListener("click",function(){
        if(count <= 99){
            count ++;
            counter.textContent = count;
    }
         counter.textContent = count;
     })

     button2.addEventListener("click",function(){
        if(count <= 90){
                count += 10;
                counter.textContent = count;
        }
        counter.textContent = count;
    })

    button3.addEventListener("click",function(){
        count = 0;
        counter.textContent = count;
    })

    counter.addEventListener("click",function(){
        count = 0;
        counter.textContent = count;
    })

   

     gameCountainer.appendChild(button1);
     gameCountainer.appendChild(button2);
     gameCountainer.appendChild(button3);
     gameCountainer.appendChild(counter);
     
 }
 ClickCounterGame();

 function startNumberGuessgame(){
    const gameCountainer = document.getElementById("game-container");
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let message = document.createElement("p");
    message.textContent = randomNumber;
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "好きな数字を入力してください (1 ~ 100)"  
    gameCountainer.appendChild(message);
    gameCountainer.appendChild(input);

    let button = document.createElement("button");
    button.textContent = "確認"

    

    button.addEventListener("click",function(){
        const val = parseInt(input.value)
        if (randomNumber == val){
            message.textContent = "正解"
        }else if (randomNumber  < val){
            message.textContent = "大きいね"
        }else if (randomNumber  > val){
            message.textContent = "小さいね"
        }
        count++;
        countDisplay.tectContent = `試行回数 : ${count}`;
    })
    gameCountainer.appendChild(button);

    let count = 0;
    const countDisplay = document.createElement("p")
    countDisplay.tectContent = `試行回数 : ${count}`;
    gameCountainer.appendChild(countDisplay);
}
 startNumberGuessgame();