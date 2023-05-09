/*funcionaliad

Slider */
const slider = document.querySelector("#slider"); // caja
const btnLeft = document.querySelector("#btnLeft"); // boton izquierda
const btnRight = document.querySelector("#btnRight"); // boton derecha

let sliderSection = document.querySelectorAll(".sliderSection"); //creamos el array de los div que tienen las imagenes
let sliderSectionLast = sliderSection[sliderSection.length-1]; //guardamos el ultimo elemento del array

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //colocamos el ultimo elemento del array al inicio de la caja con el metodo inserAdjacentElement

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".sliderSection")[0];//guardamos el primer elemento del array

    slider.style.marginLeft = "-200%"; //cambiamos el margin para que cambie al otro elemento
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst)//enviamos al final de la caja al primer slide
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length-1]; //guardamos el ultimo elemento del array

    slider.style.marginLeft = "0"; //cambiamos el margin para que vuelva la principio
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);//enviamos al inicio al ultimo elemento del array
        slider.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function(){
    Next();
}, 5000); //para que cambie solo cada 5s

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

/*Fin

Slider*/
