document.addEventListener("DOMContentLoaded", () => {
    const tipoDonante = document.getElementById("tipo-donante");
    const personaSection = document.getElementById("persona-section");
    const empresaSection = document.getElementById("empresa-section");
    const anonimoSection = document.getElementById("anonimo-section");

    function updateRequiredAttributes(section, add) {
        const inputs = section.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (add) {
                input.setAttribute("required", "required");
            } else {
                input.removeAttribute("required");
            }
        });
    }

    tipoDonante.addEventListener("change", (e) => {
        personaSection.classList.add("hidden");
        empresaSection.classList.add("hidden");
        anonimoSection.classList.add("hidden");

        updateRequiredAttributes(personaSection, false);
        updateRequiredAttributes(empresaSection, false);
        updateRequiredAttributes(anonimoSection, false);

        const selectedValue = e.target.value;
        let targetSection = null;
        if (selectedValue === "persona") {
            personaSection.classList.remove("hidden");
            targetSection = personaSection;
        } else if (selectedValue === "empresa") {
            empresaSection.classList.remove("hidden");
            targetSection = empresaSection;
        } else if (selectedValue === "anonimo") {
            anonimoSection.classList.remove("hidden");
            targetSection = anonimoSection;
        }

        if (targetSection) {
            updateRequiredAttributes(targetSection, true);
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
