'use strict';
alert("Welcome to those who believe in the power of dreams and who would like to join me in my exploration of life");
let score = 0;
let userName = prompt('What is your name ?');
while(!userName){
userName = prompt('please enter your name ?');
}
alert('Hello Dear ' + userName + ' ,I am glad that you are in my web page');
function mth_class(){
let x = prompt(' Do you think I like Math classes ?' , 'answer with yes or no plz' );
console.log(x);
switch(x.toLocaleLowerCase()){
case 'yes':
    case  'y' :
        alert('Correct, I love them');
        score++;
        break;
    case 'no':
    case 'n':
        alert('WRONG !!!');
        break;       
}
}
mth_class();
function fav_car(){
let c = prompt(' Is BMW my favourite car ?');
console.log(c);
switch(c.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('WRONG!!! AMG 63 GT is my favourite car');
        score++;
        break;
    case 'no':
    case 'n':
        alert('YES,AMG 63 GT is my favourite car ');
        break;       
}
}
fav_car();
function sign(){
let v = prompt(' Is black is my signature color ?');
console.log(v);
switch(v.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('Correct, it is');
        score++;
        break;
    case 'no':
    case 'n':
        alert('WRONG!!!! It is black');
        break;       
}
}
sign();

function fav_color(){
let b = prompt(' Is Red is my best color ?');
console.log(b);
switch(b.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('Correct, it is');
        score++;
        break;
    case 'no':
    case 'n':
        alert('WRONG!!!! It is Red');
        break;       
}
}

function fav_drink(){
let n = prompt('Do you think I like Choco Milkshakes?');
switch(n.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('WRONG, I like Papaya, Grapes and strawberry Milkshakes ');
        break;
        case 'no':
        case 'n':
        alert('Exactly !!!! I hate Chocolate Milkshakes');
        score++;
        break;       
}
}
fav_drink();
function placedToVisited(){

for(let i = 0; i < 8 ; i++){
    let m = prompt('How many countries did I visit ?' , 'plz answer with a number');
    if( m == 11 ){
         alert('The answer is correct!');
         break;
    }else if(m > 11) {
         alert('the answer is lower!');
         i++;
    }else{ alert('The answer is higher!');
         i++;

    }
}

alert(' The correct answer is 11');
}
placedToVisited();

function gess_game(){
for(let i = 0; i < 6 ; i++){
    let q = prompt('a box has 10 balls with different colors, pick the red ball by gussing its number', 'plz type any number from 1 to 10? ');
    let balls = ['Black', 'Green', 'Red', 'Yellow', 'Grey', 'Brown'];
    if( q == 3 ){
        alert('CORRECT, Here is the ' + balls[2] + ' ball');
        i= i+6;
    }else {
        alert('Please pick another one !!');
    }
}

alert('The correct answer is 3');
}
gess_game();
alert('Great work ' + ' and your score is ' + score);

let y = confirm('Are you interested in exploration ?');
switch(y){
    case true:
        confirm('Are you sure ?');
        document.write(' Welcome dear ' + userName + ' to our exploration site');
        break;
    case false:
        confirm('Are you sure ?');
        document.write('Take around here dear ' + userName + ' to know more!');
        break;
}

