document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const mensaje = document.getElementById('mensaje');
    const tipoSolicitud = document.getElementById('tipo-solicitud');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Éxito: El formulario se ha enviado correctamente.');
            form.reset();
        } else {
            alert('Error: Por favor, complete todos los campos obligatorios.');
        }
    });

    mensaje.addEventListener('input', function () {
        updateTipoSolicitud(mensaje.value);
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        return nombre !== '' && correo !== '' && direccion !== '' && telefono !== '' && mensaje !== '';
    }

    function updateTipoSolicitud(mensaje) {
        if (mensaje.toLowerCase().includes('consulta')) {
            tipoSolicitud.value = 'consulta';
        } else if (mensaje.toLowerCase().includes('compra')) {
            tipoSolicitud.value = 'compra';
        } else if (mensaje.toLowerCase().includes('venta')) {
            tipoSolicitud.value = 'venta';
        }
    }
});
