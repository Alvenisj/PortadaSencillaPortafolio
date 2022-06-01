//en la variable openModal se guarda el valor del boton: "join us"
const openModal = document.querySelector('.hero__cta');
//en la variable modal se guarda el elemento section
const modal = document.querySelector('.modal');
// en la variable closeModal se guarda el elemento a de cerrar el modal
const closeModal = document.querySelector('.modal__close');


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});