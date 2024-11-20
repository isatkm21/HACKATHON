document.addEventListener("DOMContentLoaded", () => {
    const tipoDonante = document.getElementById("tipo-donante");
    const personaSection = document.getElementById("persona-section");
    const empresaSection = document.getElementById("empresa-section");
    const anonimoSection = document.getElementById("anonimo-section");

    tipoDonante.addEventListener("change", (e) => {
        personaSection.classList.add("hidden");
        personaSection.classList.remove("form");
        empresaSection.classList.add("hidden");
        empresaSection.classList.remove("form");
        anonimoSection.classList.add("hidden");
        anonimoSection.classList.remove("form");

        const selectedValue = e.target.value;
        let targetSection = null;
        if (selectedValue === "persona") {
            personaSection.classList.remove("hidden");
            personaSection.classList.add("form");
            targetSection = personaSection;
        } else if (selectedValue === "empresa") {
            empresaSection.classList.remove("hidden");
            empresaSection.classList.add("form");
            targetSection = empresaSection;
        } else if (selectedValue === "anonimo") {
            anonimoSection.classList.remove("hidden");
            anonimoSection.classList.add("form");
            targetSection = anonimoSection;
        }
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
