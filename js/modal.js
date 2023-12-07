const btnAbrirModales = document.querySelectorAll(".btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");


btnAbrirModales.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.showModal();
    });
});

btnCerrarModal.addEventListener("click", () => {
    modal.close();
});