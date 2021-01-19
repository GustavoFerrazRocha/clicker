let score = 0;
let storeLevel = 0; 


function clickBtn(){
    score ++;
    document.getElementsByClassName('coin').innerHTML = 'Cliques:' + score;
}

