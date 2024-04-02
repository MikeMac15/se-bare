document.addEventListener("DOMContentLoaded", function() {
    const calendlyButton = document.querySelector('.calendly-button');
    calendlyButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('https://calendly.com/soaringeagleedcenter/30min', '_blank');
    });
});
