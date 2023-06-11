const valorTicket = 200;

const descuentoEstudiante = 80;
const descuentoTrainee = 50;
const descuentoJunior = 15;

const nombre = document.getElementById("nombre");
const divErrorNombre = document.getElementById("mensajeErrorNombre");
const apellido = document.getElementById("apellido");
const divErrorApellido = document.getElementById("mensajeErrorApellido");
const mail = document.getElementById("mail");
const divErrorMail = document.getElementById("mensajeErrorMail");
const cantidadTickets = document.getElementById("cantidadTickets");
const mensajeErrorCantTickets = document.getElementById(
    "mensajeErrorCantTickets"
);
const categoria = document.getElementById("categoriaSelect");
const mensajeErrorCategoria = document.getElementById("mensajeErrorCategoria");
const totalPago = document.getElementById("totalPago");
const btnResumen = document.getElementById("btnResumen");
const btnBorrar = document.getElementById("btnBorrar");

const quitarClaseError = () => {
    const listaNodos = document.querySelectorAll(".form-control, .form-select");
    listaNodos.forEach((nodo) => nodo.classList.remove("is-invalid"));

    const listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    listaNodosdiv.forEach((nodo) => nodo.classList.remove("propia"));
};

const totalAPagar = () => {
    quitarClaseError();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add("propia");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("propia");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        mail.classList.add("is-invalid");
        divErrorMail.classList.add("propia");
        mail.focus();
        return;
    }

    const emailValido = (mail) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    };

    if (!emailValido(mail.value)) {
        mail.classList.add("is-invalid");
        divErrorMail.classList.add("propia");
        mail.focus();
        return;
    }

    if (cantidadTickets.value == 0 || isNaN(cantidadTickets.value)) {
        cantidadTickets.classList.add("is-invalid");
        mensajeErrorCantTickets.classList.add("propia");
        cantidadTickets.focus();
        return;
    }

    if (categoria.value == "") {
        categoria.classList.add("is-invalid");
        mensajeErrorCategoria.classList.add("propia");
        categoria.focus();
        return;
    }

    let totalValorTickets = cantidadTickets.value * valorTicket;

    switch (categoria.value) {
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets -=
                (descuentoEstudiante / 100) * totalValorTickets;
            break;
        case "2":
            totalValorTickets -= (descuentoTrainee / 100) * totalValorTickets;
            break;
        case "3":
            totalValorTickets -= (descuentoJunior / 100) * totalValorTickets;
            break;
    }

    totalPago.innerHTML = totalValorTickets;
};

btnResumen.addEventListener("click", totalAPagar);

const resetTotalAPagar = () => {
    quitarClaseError();
    totalPago.innerHTML = "";
};

btnBorrar.addEventListener("click", resetTotalAPagar);
