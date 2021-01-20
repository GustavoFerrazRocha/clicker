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

    }
}
currentStoreLevel = () => {
    if(localStorage.getItem("storeLevel") == null){
        document.getElementById('shopLevel').innerHTML = "Shop Level: " + Number(storeLevel) ;
        
    } else{
        document.getElementById('shopLevel').innerHTML = 'Shop Level: ' +  localStorage.storeLevel;

    }
}
currentStoreLevel();
currentScore();

function clickBtn(){
    localStorage.score++;
    currentScore();
    coin.style.transform = 'scale(1.1)';
    setInterval(function(){coin.style.transform = 'scale(1.0)'},  500);

}

function storeUp(){
    let scoreMin = 100 * storeLevel;
    score = localStorage.score;
    storeLevel = localStorage.storeLevel;
    
    
    if (storeLevel <= 99 && score >= scoreMin ) {
        if(Number(localStorage.storeLevel) <= 99 ){
         localStorage.storeLevel = Number(localStorage.storeLevel)+1;
         }
        score = score - (100 * storeLevel);
        storeLevel++;
        localStorage.score = score;
        currentStoreLevel();
        currentScore();
        }            
}
     


css_colormode = document.getElementsByClassName('css_colormode')[0]
color_mode = document.getElementsByClassName('color_mode')[0]

color_mode.addEventListener('click', () => {
    if (css_colormode.getAttribute("href") == 'styles/main.css') {
        css_colormode.href = 'styles/main_white.css'
        color_mode.src = './assets/svg/sun_black.svg'

    }
    else{
        css_colormode.href = 'styles/main.css'
        color_mode.src = './assets/svg/sun_white.svg'
    }
})
