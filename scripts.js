document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        day.addEventListener('click', function() {
            day.classList.toggle('expanded');
        });
        const closeButton = day.querySelector('.close-button');
        closeButton.addEventListener('click', function(event) {
            event.stopPropagation();
            day.classList.remove('expanded');
        });
    });
});
        // Disable right-click on the entire page
        document.oncontextmenu = function() {
            return false;
        };
