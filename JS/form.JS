const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    actionForm(event);
})

// SWAL ALRET FORMULARIO DE CONTACTO

function actionForm(event) {
    event.preventDefault();

    const formData = {
        nombre: event.target.elements["nombreApellido"].value,
        correo: event.target.elements["email"].value,
        telefono: event.target.elements["telefono"].value,
        mensaje: event.target.elements["mensaje"].value,
    };

    console.log(formData);

    // Vaciar los campos del formulario
    event.target.elements["nombreApellido"].value = "";
    event.target.elements["email"].value = "";
    event.target.elements["telefono"].value = "";
    event.target.elements["mensaje"].value = "";

    swal({
        title: `Gracias ${formData.nombre} por dejarnos tu comentario. A la brevedad nos contactaremos.`,
        icon: "success",
        button: "Continuar",
    });
}