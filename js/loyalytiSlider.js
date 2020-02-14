let back = document.querySelector('.cards-container-main .btn.back');
let next = document.querySelector('.cards-container-main .btn.next');
let container = document.querySelector('.loyality .cards-container-daughter');

back.onclick = function () {
    if(back.getAttribute('translate')<0){
        console.log(back.getAttribute('translate'));
        back.getAttribute('translate')+=25;
        console.log(back.getAttribute('translate'));
    }
}
