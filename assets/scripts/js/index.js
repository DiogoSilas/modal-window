const btnOpenModal = window.document.getElementById('btn-open-modal')
btnOpenModal.addEventListener('click', openAndCloseModal);

function openAndCloseModal() {
    const modal = window.document.getElementById('modal-window');
    modal.classList.add('open');
    modal.addEventListener('click', (e) => {
        //e = event ou evento.
        if(e.target.id == 'btn-close-modal' || e.target.id == 'modal-window') {
            modal.classList.remove('open');
            console.log('Fechou o modal')
        };
    });
};