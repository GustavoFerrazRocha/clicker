const store = document.getElementById('store');
let score = 0;
let storeLevel = 1; 
currentScore = () => {document.getElementsByClassName('coin')[0].innerHTML = 'Coins: ' + localStorage.score;}

localStorage.setItem("score", "0")

currentScore();

function clickBtn(){
    if(typeof(Storage) !== undefined){
        if(localStorage.score){
            localStorage.score = Number(localStorage.score)+1;
        } else{
            localStorage.score = 0;
        }
        
    }
    currentScore();
    coin.style.transform = 'scale(1.1)';
    setInterval(function(){coin.style.transform = 'scale(1.0)'},  500);

}

function storeUp(){
   let scoreMin = storeLevel * 100;
    if (storeLevel <= 99 && score >= scoreMin ) {
        score = score - (100 * storeLevel);
        storeLevel++;
        currentScore();
    } 
}