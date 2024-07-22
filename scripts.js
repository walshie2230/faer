document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const days = document.querySelectorAll('.day');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : days.length - 1;
        updateCarousel();
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex < days.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    const flipButtons = document.querySelectorAll('.flip-button');
    const flipBackButtons = document.querySelectorAll('.flip-back-button');

    flipButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.closest('.content');
            content.classList.add('flipped');
        });
    });

    flipBackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.closest('.content');
            content.classList.remove('flipped');
        });
    });
});
