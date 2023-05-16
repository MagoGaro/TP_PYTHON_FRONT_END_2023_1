/*funcionaliad

Slider */
const slider = document.querySelector("#slider"); // caja
const btnLeft = document.querySelector("#btnLeft"); // boton izquierda
const btnRight = document.querySelector("#btnRight"); // boton derecha

let sliderSection = document.querySelectorAll(".sliderSection"); //creamos el array de los div que tienen las imagenes
let sliderSectionLast = sliderSection[sliderSection.length - 1]; //guardamos el ultimo elemento del array

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //colocamos el ultimo elemento del array al inicio de la caja con el metodo inserAdjacentElement

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".sliderSection")[0];//guardamos el primer elemento del array

    slider.style.marginLeft = "-200%"; //cambiamos el margin para que cambie al otro elemento
    slider.style.transition = "all 0.5s";

    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst)//enviamos al final de la caja al primer slide
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length - 1]; //guardamos el ultimo elemento del array

    slider.style.marginLeft = "0"; //cambiamos el margin para que vuelva la principio
    slider.style.transition = "all 0.5s";

    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);//enviamos al inicio al ultimo elemento del array
        slider.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function () {
    Next();
}, 5000); //para que cambie solo cada 5s

btnRight.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

/*Fin

Slider*/


/* Efecto SlideDown con Jquery */
/*$("#open1").click(function(){
    $("#abrirP1").slideToggle(600);
});
$("#open2").click(function(){
    $("#abrirP2").slideToggle(600);
});
$("#open3").click(function(){
    $("#abrirP3").slideToggle(600);
});
$("#open4").click(function(){
    $("#abrirP4").slideToggle(600);
});
$("#open5").click(function(){
    $("#abrirP5").slideToggle(600);
});*/


/* Efecto SlideDown con JavaScript  */

let slideUp = (target, duration = 5000) => {

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';
    window.setTimeout(() => {
        target.style.display = 'none'
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

let slideDown = (target, duration = 5000) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') {
        display = 'block';
    }
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

let slideToggle = (target, duration = 5000) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

document.getElementById("trigger").addEventListener('click', function () {
    slideToggle(document.getElementById("target"), 60);
});
document.getElementById("trigger2").addEventListener('click', function () {
    slideToggle(document.getElementById("target2"), 60);
});
document.getElementById("trigger3").addEventListener('click', function () {
    slideToggle(document.getElementById("target3"), 60);
});
document.getElementById("trigger4").addEventListener('click', function () {
    slideToggle(document.getElementById("target4"), 60);
});
document.getElementById("trigger5").addEventListener('click', function () {
    slideToggle(document.getElementById("target5"), 60);
});