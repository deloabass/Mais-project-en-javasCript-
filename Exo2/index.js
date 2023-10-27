// 1s
let red = document.querySelectorAll('.red');
for(let i = 0; i < red.length;i++){
    red[i].classList.remove('red')
    red[i].classList.add('blue')
}
// 2
let refrain = document.querySelectorAll('.refrain');
for(let i = 0; i < refrain.length; i++){
    refrain[i].classList.add('italic')
}
// 3
let paragraphe = document.querySelectorAll("p");
for(let p = 0; p < paragraphe.length;p++){
    paragraphe[p].style.backgroundColor ='#8A2BE2';
}
// document.refrain.style.backgroundColor = '#8A2BE2';
// 4
for(let m = 0; m < paragraphe.length;m++){
    paragraphe[m].style.margin = 0;
}