var vw = $(window).width();
console.log(vw);


if (vw < 995) {
    console.log('small vw')
    AOS.init({
        offset: 200, // offset (in px) from the original trigger point
        delay: 100, // values from 0 to 3000, with step 50ms
        duration: 900, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'center-center' // defines which position of the element regarding to window should trigger the animation
    });
} else {
    console.log('larger vw');
    AOS.init({
        offset: 500, // offset (in px) from the original trigger point
        delay: 100, // values from 0 to 3000, with step 50ms
        duration: 900, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-top' // defines which position of the element regarding to window should trigger the animation
    });
}

var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1200,
    startDelay: 500,
    loop: false,
    showCursor: true
});