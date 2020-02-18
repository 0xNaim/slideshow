var i;
var slideIndex = 1;
var slide = document.getElementsByClassName('sliders');
var dot = document.getElementsByClassName('dots');

function plusIndex(n) {
    changeImg(slideIndex += n);
}

function currentSlide(n) {
    changeImg(slideIndex = n);
}

changeImg(slideIndex);
function changeImg(n) {
    if (n>slide.length) {slideIndex = 1;}
    if (n<1) {slideIndex = slide.length;}
    for (i=0; i<slide.length; i++) {
        slide[i].style.display = 'none';
    }
    for (i=0; i<dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');
    }
    dot[slideIndex-1].className += ' active';
    slide[slideIndex-1].style.display = 'block'; 
}