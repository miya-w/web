let text = document.getElementById('text');
let sun = document.getElementById('sun');
let birds = document.getElementById('birds');
let valley1 = document.getElementById('valley1');
let valley2 = document.getElementById('valley2');
let valley3 = document.getElementById('valley3');
let valley4 = document.getElementById('valley4');
let valley5 = document.getElementById('valley5');
let btn = document.getElementById('btn');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    // !!??? // 
    let value = window.scrollY;

    text.style.top = 30 + value * -0.3 +'%';
    birds.style.top = value * -1.5 +'px';
    btn.style.marginTop = value * -1.5 +'px';
    mountain.style.top =  value * 0.9 +'px';
    // valley1.style.top =  value * 1 +'px';
    valley2.style.top =  value * 0.9 +'px';
    valley3.style.top =  value * -0.3 +'px';
    valley4.style.top =  value * 0.1 +'px';
    valley5.style.top =  value * -0.12 +'px';
    
})
