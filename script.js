let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');

let bcard1 = document.querySelector('.card_body1');
let bcard2 = document.querySelector('.card_body2');
let bcard3 = document.querySelector('.card_body3');

function visible1(){
    if(bcard1.classList.contains('visible')){
        bcard1.classList.remove('visible')
    }else{
        bcard1.classList.add('visible')
    }
}
function visible2(){
    if(bcard2.classList.contains('visible')){
        bcard2.classList.remove('visible')
    }else{
        bcard2.classList.add('visible')
    }
}
function visible3(){
    if(bcard3.classList.contains('visible')){
        bcard3.classList.remove('visible')
    }else{
        bcard3.classList.add('visible')
    }
}

card1.addEventListener('click', () =>{
    visible1();
})
card2.addEventListener('click', () =>{
    visible2();
})
card3.addEventListener('click', () =>{
    visible3();
})