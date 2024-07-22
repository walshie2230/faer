document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const days = document.querySelectorAll('.day');
    const prevDay = document.getElementById('prev-day');
    const nextDay = document.getElementById('next-day');
    let currentIndexDay = 0;

    function updateCarouselDay() {
        const offset = -currentIndexDay * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevDay.addEventListener('click', () => {
        currentIndexDay = (currentIndexDay > 0) ? currentIndexDay - 1 : days.length - 1;
        updateCarouselDay();
    });

    nextDay.addEventListener('click', () => {
        currentIndexDay = (currentIndexDay < days.length - 1) ? currentIndexDay + 1 : 0;
        updateCarouselDay();
    });

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

    const exerciseCarousels = document.querySelectorAll('.exercise-carousel');
    exerciseCarousels.forEach(exerciseCarousel => {
        const exercises = exerciseCarousel.querySelectorAll('.exercise-block');
        const prevExercise = exerciseCarousel.parentElement.querySelector('#prev-exercise');
        const nextExercise = exerciseCarousel.parentElement.querySelector('#next-exercise');
        let currentIndexExercise = 0;

        function updateCarouselExercise() {
            const offset = -currentIndexExercise * 100;
            exerciseCarousel.style.transform = `translateX(${offset}%)`;
        }

        prevExercise.addEventListener('click', () => {
            currentIndexExercise = (currentIndexExercise > 0) ? currentIndexExercise - 1 : exercises.length - 1;
            updateCarouselExercise();
        });

        nextExercise.addEventListener('click', () => {
            currentIndexExercise = (currentIndexExercise < exercises.length - 1) ? currentIndexExercise + 1 : 0;
            updateCarouselExercise();
        });

        // Initialize the exercise carousel
        updateCarouselExercise();
    });

    // Initialize the day carousel
    updateCarouselDay();
});
