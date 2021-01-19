let score = 0;
let storeLevel = 0; 


function clickBtn(){
    score ++;
    document.getElementsByClassName('coin')[0].innerHTML = 'Cliques: ' + score;
    coin.style.transform = 'scale(1.1)'
    setInterval(function(){coin.style.transform = 'scale(1.0)'},  500)
}

