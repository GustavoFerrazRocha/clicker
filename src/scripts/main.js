const store = document.getElementById('store');
let score = 0;
let storeLevel = 1; 

if(typeof(Storage) !== undefined){
    if(!localStorage.score ){
        localStorage.setItem("score", score);
    } 
 
    if(!localStorage.storeLevel){
        localStorage.setItem("storeLevel", storeLevel);
     } 
}
currentScore = () => {
    if(localStorage.getItem("score") == null){
        document.getElementsByClassName('coin')[0].innerHTML = 'Coins: ' + Number(score) ;
    } else{
        document.getElementsByClassName('coin')[0].innerHTML = 'Coins: ' +  localStorage.score;
        document.getElementById('costShop').innerHTML = 'Cost: ' + Number(localStorage.storeLevel) * 100  + ' coins'
        if (localStorage.storeLevel == 100){
            document.getElementById('costShop').innerHTML = 'Max Limit Reached'
        }
    }
}
currentStoreLevel = () => {
    if(localStorage.getItem("storeLevel") == null){
        document.getElementById('shopLevel').innerHTML = "Next Shop Level: " + Number(storeLevel) ;
        
    } else{
        document.getElementById('shopLevel').innerHTML = 'Next Shop Level: ' +  localStorage.storeLevel;
        document.getElementById('costShop').innerHTML = 'Cost: ' + Number(storeLevel) * 100  + ' coins'
    }
}
currentStoreLevel();
currentScore();

function clickBtn(){
    localStorage.score++;
    currentScore();
    coin.style.transform = 'scale(0.9)';
    setTimeout(() => {coin.style.transform = 'scale(1.0)'},  50);

}

function storeUp(){
    let scoreMin = 100 * storeLevel;
    score = localStorage.score;
    storeLevel = localStorage.storeLevel;
    
    
    if (storeLevel <= 99 && score >= scoreMin ) {
        score = localStorage.score - (100 * storeLevel);
        localStorage.storeLevel = Number(localStorage.storeLevel)+1;
        storeLevel++;
        localStorage.score = score;
        currentStoreLevel();
        currentScore();
        }
    else{
        document.getElementById('costShop').innerHTML = 'Max Limit Reached'
    }
}