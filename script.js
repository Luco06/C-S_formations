function openCard(){
    document.querySelector(".card_body").style.height="auto";
    document.querySelector(".card_body").style.opacity=1;
    document.querySelector(".down").style.visibility="hidden";
    document.querySelector(".up").style.visibility="visible";
}
function closeCard(){
    document.querySelector(".card_body").style.height=0;
    document.querySelector(".card_body").style.opacity=0;

}