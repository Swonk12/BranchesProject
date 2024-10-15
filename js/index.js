document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const user = form.user.value.trim();
        const pass = form.pass.value.trim();

        if (user === "" || pass === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        
        alert(`Bienvenido, ${user}!`);
    });
});
