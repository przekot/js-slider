
document.addEventListener('DOMContentLoaded', function () {

    var slides = document.querySelectorAll(".slider ul li");
    var next = document.querySelector(".control_next");
    var prev = document.querySelector(".control_prev");

    var el = 0;

    slides[el].style.left = "0";

    function showNext(){
        slides[el].style.left = "100%";
        /*slides[el].style.visibility = "hidden";*/
        el += 1;
        validateCurrentPosition();
        slides[el].style.left = "0";
    };

    function showPrev(){
        slides[el].style.left = "100%";
        el -= 1;
        validateCurrentPosition();
        slides[el].style.left = "0";
    };

    function validateCurrentPosition(){
        if(el < 0){
            el = slides.length -1;
        }
        if(el === slides.length){
            el = 0;
        }
    }

    prev.addEventListener('click', function () {
        showPrev();
    });

    next.addEventListener('click', function () {
        showNext();
    });


});