const picker_tool = document.getElementById('color-picker');

picker_tool.addEventListener('mousedown', function() {
    openModal(this.id);
});

// Function displays selected modal. Accepts paramater of the clicked element's ID.
function openModal(e) {
    var modal = document.getElementById(`${e}_modal`);
    modal.classList.add('active');

    closeBtn = document.querySelector('.active .close');
    closeBtn.addEventListener('mousedown', function () {
        modal.classList.remove('active');
    });

    // If user clicks outside of the modal content box, modal will clos
    // Note this requires content inside of the modal content box to work (not positioned absolutely)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    }
};