// Manejador del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Mostrar el mensaje de confirmación
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden');

    // Limpiar los campos del formulario
    this.reset();
});