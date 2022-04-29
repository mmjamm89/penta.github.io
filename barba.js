barba.init({
    //to override every data-barba attr
    // schema: {
    //     prefix: 'data-custom',
    //     wrapper: 'wrap'
    // }

    transition: [{
        name: 'opacity-transition',
        leave(data) {
            //create leave animation here
            return gsap.to(data.current.container, {
                opacity: 0
            });
        },
        enter(data) {
            //create enter animation here
            return gsap.from(data.next.container, {
                opacity: 0
            });
        }
    }]
});