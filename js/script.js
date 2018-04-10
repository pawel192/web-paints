const Slider = function(elemSelector) {
    this.currentSlide = 0; //aktualny slide
    this.sliderSelector = elemSelector; //selektor elementu który zamienimy na slider
    this.elem = null; //tutaj pobierzemy element ktory zamienimy na slider
    this.slider = null; //tutaj wygenerujemy slider
    this.slides = null; //tutaj pobierzemy slajdy
    this.prev = null; //przycisk prev
    this.next = null; //przucisl next
    this.dots = []; //przyciski kropek
}