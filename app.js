TweenMax.staggerFrom(
    ".logo > img",
    1,
    {
        // y: "-50",
        opacity: 0,
        ease: Power2.easeOut,
        delay: .8,
    },
    0.08
);


const textrev = gsap.timeline();
textrev.from(".right-side li", 1, {
    y: 60,
    ease: "power4.out",
    delay: 1.8,
    skewY: 10,
    opacity: 0,
    stagger: {
        amount: 0.4,
    },
});


TweenMax.staggerFrom(
    ".headline > p",
    1,
    {
        y: "50",
        opacity: 0,
        ease: Power3.easeOut,
        delay: 1,
        skewX: 10,
        
    },
    0.08
);

