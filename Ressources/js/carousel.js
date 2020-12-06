const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotNav = document.querySelector('.carousel-dots');
const dots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px"
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

//Bouton gauche
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);

    const currentDot = dotNav.querySelector('.current-dot');
    const prevDot = currentDot.previousElementSibling;
    currentDot.classList.remove('current-dot');
    prevDot.classList.add('current-dot');
});

//Bouton droit
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);

    const currentDot = dotNav.querySelector('.current-dot');
    const nextDot = currentDot.nextElementSibling;
    currentDot.classList.remove('current-dot');
    nextDot.classList.add('current-dot');
});

//Dots
dotNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('current-dot');
    const targetIndex = dots.findIndex(dot => dots === targetDot);

    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    currentDot.classList.remove('current-dot');
    targetDot.classList.add('current-dot');
});
