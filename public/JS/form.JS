document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("contactForm");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombreApellidoInput = document.querySelector('input[name="nombreApellido"]');
        const emailInput = document.querySelector('input[name="email"]');
        const telefonoInput = document.querySelector('input[name="telefono"]');

        const nombreApellido = nombreApellidoInput.value;
        const email = emailInput.value;
        const telefono = telefonoInput.value;

        if (nombreApellido === "" || email === "" || telefono === "") {
            swal({
                title: "Por favor, completa todos los campos marcados con asterisco (*)",
                icon: "error",
            });
        } else {
            swal({
                title: `Gracias ${nombreApellido} por dejarnos tu comentario. A la brevedad nos contactaremos.`,
                icon: "success",
            });

            // Restablece los valores
            nombreApellidoInput.value = "";
            emailInput.value = "";
            telefonoInput.value = "";
        }
    });
});
