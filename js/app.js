'use strict';
alert("Welcome to those who believe in the power of dreams and who would like to join me in my exploration of life")
let x = prompt('What is your name ?')
confirm(' Welcome dear ' + x);




let y = confirm('Are you interested in exploration ?');
switch(y){
    case true:
       confirm('Are you sure ?');
        document.write(' Welcome dear ' + x + ' to our exploration site');
        break;
        case false:
            confirm('Are you sure ?');
        document.write('Take around here dear ' + x + ' to know more!');
        break;
}

