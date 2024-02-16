$(document).ready( function() {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $('.card-animado').dblclick(function () {
        $(this).addClass('animate__animated animate__wobble');
        setTimeout(() => {
            $(this).removeClass('animate__animated animate__wobble');
        }, 2000);
        
    });

});