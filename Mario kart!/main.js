//Mario kart randomizer

'use strict';
//event listener

document.getElementById('generate').addEventListener('click' , itemCollect);
let bananas = 0;
let shells = 0;
let stars = 0;
let golden = 0;
let bill = 0; 
let firstClick = true;
let racep;
//event function 

function itemCollect() {
    // generate random numbers
 
    let randNum = Math.random();
    let racer = document.getElementById('racer').value;
    if (firstClick == true){
        racep = Number(racer);
        firstClick = false;
    }
    console.log('racep: ' + racep);
   

    console.log("racer: " + racer);
    console.log("randNum: " + randNum);
    

    // simulating results...

    if (randNum > 0.35 && racer >= 1 && racer < 7 ) {
        
        console.log('banana');
        bananas +=1;
        document.getElementById('bananas').innerHTML = bananas;
        document.getElementById('results').innerHTML += '<img src = "Banana.png">';
        racep += 1;

    } else if (randNum > 0.15 &&  randNum <= 0.35 && racer >=1 && racer <7 ) {
        console.log('shell');
        shells +=1;
        document.getElementById('shells').innerHTML = shells;
        document.getElementById('results').innerHTML += '<img src = "Gshell.png">';
        racep +=0;

    } else if (randNum > 0.05 && randNum <= 0.15 && racer >=1 && racer <7) {
        console.log('star');
        stars +=1;
        document.getElementById('stars').innerHTML = stars;
        document.getElementById('results').innerHTML  += '<img src = "star.png">';
        racep -=2;


    } else if (randNum <=0.04 && racer >=1 && racer <7) {
        console.log('golden mushroom');
        golden +=1;
        document.getElementById('golden').innerHTML = golden;
        document.getElementById('results').innerHTML += '<img src = "Gmush.png">';
        racep -=1;

    } else if (randNum == 0.01 && racer >=1 && racer <7) {
        console.log('bullet bill');
        bill +=1;
        document.getElementById('bill').innerHTML = bill;
        document.getElementById('results').innerHTML += '<img src = "Mrbill.png">';
        racep-=2;
    }




    if (randNum <0.05 && racer >=7 && racer <=12 ) {
        console.log('banana');
        bananas +=1;
        document.getElementById('bananas').innerHTML = bananas;
        document.getElementById('results').innerHTML += '<img src = "Banana.png">';
        racep-=1;

    } else if (randNum <=0.05   && racer >=7 && racer <=12 ) {
        console.log('shell');
        shells +=1;
        document.getElementById('shells').innerHTML = shells;
        document.getElementById('results').innerHTML += '<img src = "Gshell.png">';
        racep-=1;

    } else if (randNum >0.05 && randNum <0.26  && racer >7 && racer <=12) {
        console.log('star');
        stars +=1;
        document.getElementById('stars').innerHTML = stars;
        document.getElementById('results').innerHTML  += '<img src = "star.png">';
        racep-=1;


    } else if (randNum >=0.26 && randNum <=0.61 && racer >=7 && racer <=12) {
        console.log('golden mushroom');
        golden +=1;
        document.getElementById('golden').innerHTML = golden;
        document.getElementById('results').innerHTML += '<img src = "Gmush.png">';
        racep-=1;

    } else if ( randNum >0.61 && racer >=7 && racer <=12) {
        console.log('bullet bill');
        bill +=1;
        document.getElementById('bill').innerHTML = bill;
        document.getElementById('results').innerHTML += '<img src = "Mrbill.png">';
        racep-=1;


    } 





    




    
}