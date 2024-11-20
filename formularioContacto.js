document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById('form');
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        

        alert("LISTO! Mensaje enviado.!");

        formulario.submit();
    });
});
