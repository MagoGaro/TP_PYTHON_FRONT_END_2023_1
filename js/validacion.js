/*Validacion del Formulario */

function validandoAndo() {
    let name = document.getElementById('name').value;
    let iname = document.getElementById('name');
    let lastname = document.getElementById('lastname').value;
    let ilastname = document.getElementById('lastname');
    let email = document.getElementById('email').value;
    let iemail = document.getElementById('email');
    let telephone = document.getElementById('telephone').value;
    let itelephone = document.getElementById('telephone');
    let description = document.getElementById('description').value;
    let idescription = document.getElementById('description');

    let name_error = document.querySelector('#error1');
    let name_error2 = document.querySelector('#error2');
    let name_error3 = document.querySelector('#error3');
    let name_error4 = document.querySelector('#error4');
    let name_error5 = document.querySelector('#error5');

    let rvalue = true;

    //validacion nombre
    if (name == "") {
        name_error.innerHTML = "Nombre Requerido";
        name_error.style.color = "red";
        iname.style.borderColor = "red";
        rvalue = false;
    } else {
        name_error.innerHTML = "";
        iname.style.borderColor = "green";
    }

    //validacion apellido
    if (lastname == "") {
        name_error2.innerHTML = "Apellido Requerido";
        name_error2.style.color = "red";
        ilastname.style.borderColor = "red";
        rvalue = false;
    } else {
        name_error2.innerHTML = "";
        ilastname.style.borderColor = "green";
    }

    //validar correo
    let re = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|usal)\.(?:|com|edu)+$/;
    if (email == "") {
        name_error3.innerHTML = "Correo Requerido";
        name_error3.style.color = "red";
        iemail.style.borderColor = "red";
        rvalue = false;
    } else if (!re.exec(document.getElementById('email').value)) {
        name_error3.innerHTML = "Correo no valido";
        name_error3.style.color = "red";
        iemail.style.borderColor = "red";
        rvalue = false;
    } else {
        name_error3.innerHTML = "";
        iemail.style.borderColor = "green";
    }

    //validar telefono
    if (telephone == "") {
        name_error4.innerHTML = "Telefono Requerido";
        name_error4.style.color = "red";
        itelephone.style.borderColor = "red";
        rvalue = false;
    } else if ((telephone).length < 8) {
        name_error4.innerHTML = "Telefono no valido";
        name_error4.style.color = "red";
        itelephone.style.borderColor = "red";
        rvalue = false;
    } else {
        name_error4.innerHTML = "";
        itelephone.style.borderColor = "green";
    }

    //validar comentario
    if (description == "") {
        name_error5.innerHTML = "Comentario Requerido";
        name_error5.style.color = "red";
        idescription.style.borderColor = "red";
        rvalue = false;
    } else if ((description).length < 50) {
        name_error5.innerHTML = "Comentario demasiado corta";
        name_error5.style.color = "red";
        idescription.style.borderColor = "red";
        rvalue = false;
    } else {
        name_error5.innerHTML = "";
        idescription.style.borderColor = "green";
    }


    return rvalue;
}

// evento para enviar formulario a la db

const formulario = document.getElementById('formulario');
const aprobado = document.getElementById('pasoLaRevision');
const date = new Date();
let fechita = date.toLocaleString()

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (validandoAndo() == true) {
        try {
            const respuesta = await fetch('https://sheet.best/api/sheets/6112f154-2d86-4bc7-857b-ab8b3cf20de6', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "Nombre": formulario.name.value,
                    "Apellido": formulario.lastname.value,
                    "Email": formulario.email.value,
                    "Telefono": formulario.telephone.value,
                    "Mensaje": formulario.description.value,
                    "Fecha": fechita,
                }),
            });
            const contenido = await respuesta.json();
            console.log(contenido);
        } catch (error) {
            console.log(error);
        }

        aprobado.classList.remove('oculto');
        formulario.classList.add('oculto');
    }

});



