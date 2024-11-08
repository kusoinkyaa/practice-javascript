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