pageTransition = () => {
    let tl = gsap.timeline();

    tl.to('.transition', {
        duration: 1,
        height: "100vh",
        top: "0%"
    });

    tl.to('.transition', {
        duration: 1,
        height: "100vh",
        top: "100%",
        delay: .3
    });

    tl.set('.transition, .transition svg', {
        duration: 1,
        top: "0%",
        height: "0vh",
        width: "0"
    });
};
mainAnimation = () => {
    let tl = gsap.timeline();
    tl.from('.logo_home, #presentacion, #banner_obras, #obras, .titulo, .mision, .valores, .contacto_boxes, #sense', {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: {
            amount: .4
        },
        delay: .2
    });
};

delay = (n) => {
    n = n || 2000
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    })
};

// barba.init ({
//     sync: true,
//     transitions: [
//         {
//             async leave(data) {
//                 const done = this.async();
//                 pageTransition();
//                 await delay(10);
//                 done();
//             },
//             async enter(data) {
//                 mainAnimation();
//             },
//             async once(data) {
//                 mainAnimation();
//             }
//         }
        
//     ]
// });

// pageTransition();
mainAnimation();