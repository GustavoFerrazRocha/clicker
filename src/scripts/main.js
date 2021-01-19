const store = document.getElementById('store');
let score = 0;
let storeLevel = 1; 
let currentScore = document.getElementsByClassName('coin')[0].innerHTML = 'Coins: ' + score;



function clickBtn(){
    score = score + 1;
    currentScore;
    coin.style.transform = 'scale(1.1)'
    setInterval(function(){coin.style.transform = 'scale(1.0)'},  500)
}

function storeUp(){
   let scoreMin = storeLevel * 100;
    if (storeLevel <= 99 && score >= scoreMin ) {
        score = score - (100 * storeLevel);
        storeLevel++;
        currentScore;
    } 
}