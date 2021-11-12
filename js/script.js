window.addEventListener('load', function () {

    let btnPrev = document.querySelector('.gallery .buttons .prev');
    let btnNext = document.querySelector('.gallery .buttons .next');

    let images = document.querySelectorAll('.gallery .photos img');
    let i = 0;

    btnPrev.addEventListener('click', function () {
        images[i].classList.remove('showed');


        images[i].animate([
            {transform: 'translateX(0px)'},
            {transform: 'translateX(100%)'}
        ], {
            duration: 1000
        })

        i--;

        if (i < 0) {
            i = images.length - 1;
        }

        images[i].animate([
            {transform: 'translateX(-100%)'},
            {transform: 'translateX(0px)'}
        ], {
            duration: 1000
        })

        images[i].classList.add('showed');
    });

    btnNext.addEventListener('click', function () {
        images[i].classList.remove('showed');

        images[i].animate([
            {transform: 'translateX(0px)'},
            {transform: 'translateX(-100%)'}
        ], {
            duration: 1000
        })

        i++;

        if (i >= images.length) {
            i = 0;
        }


        images[i].animate([
            {transform: 'translateX(100%)'},
            {transform: 'translateX(0)'}
        ], {
            duration: 1000
        })

        images[i].classList.add('showed');
    });

});
