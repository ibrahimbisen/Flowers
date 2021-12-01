window.onload = () => {
    // const anchorsRight = document.querySelectorAll('a.rightLink');
    // const anchorsLeft = document.querySelectorAll('a.leftLink');
    const anchors = document.querySelectorAll('a');
    const transition_main = document.querySelector('.transition');
    const transition_right = document.querySelector('.transition_right');
    const transition_left = document.querySelector('.transition_left');

    setTimeout(() => {
        if ( transition_main != null ) {
            transition_main.classList.remove('is-active');
        }
        if ( transition_right != null ) {
            transition_right.classList.remove('is-active');
        }
        if ( transition_left != null ) {
            transition_left.classList.remove('is-active');
        }
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        if (i%2 == 0) {
            // console.log("yoyeeeeeeeeeee");
            anchor.addEventListener('click', e => {
                e.preventDefault();
                let target = e.target.href;
                transition_left.classList.add('is-active');
    
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            })
        }else {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                let target = e.target.href;
                transition_right.classList.add('is-active');
    
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            })
        }

    }

    // for (let i = 0; i < anchorsRight.length; i++) {
    //     const anchor = anchorsRight[i];

    //     anchor.addEventListener('click', e => {
    //         e.preventDefault();
    //         let target = e.target.href;
    //         transition_main.classList.remove(".transition-3")
    //         transition_main.classList.add(".transition-1")
    //         transition_main.classList.add('is-active');

    //         setTimeout(() => {
    //             window.location.href = target;
    //         }, 500);
    //     })
    // }

    // for (let i = 0; i < anchorsLeft.length; i++) {
    //     const anchor = anchorsLeft[i];

    //     anchor.addEventListener('click', e => {
    //         e.preventDefault();
    //         let target = e.target.href;
    //         transition_main.classList.remove(".transition-3")
    //         transition_main.classList.add(".transition-4")
    //         transition_main.classList.add('is-active');

    //         setTimeout(() => {
    //             window.location.href = target;
    //         }, 500);
    //     })
    // }
}