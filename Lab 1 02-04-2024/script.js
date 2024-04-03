document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnEnviar').addEventListener('click', function() {
        var nombre = document.getElementById('nombre').value;
        var telefono = document.getElementById('telefono').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        if (nombre && telefono && email && mensaje) {
            // Si todos los campos están completos, muestra un mensaje de éxito
            Toastify({
                text: "Mensaje enviado correctamente.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#3f8880"
            }).showToast();

            // Limpiar los campos del formulario
            document.getElementById('nombre').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensaje').value = '';
        } else {
            // Si falta algún campo, muestra un mensaje de error
            Toastify({
                text: "Por favor, completa todos los campos.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#f00"
            }).showToast();
        }
    });
});