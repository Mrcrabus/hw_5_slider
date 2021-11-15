window.addEventListener('load', function () {

    let btnPrev = document.querySelector('.gallery .buttons .prev');
    let btnNext = document.querySelector('.gallery .buttons .next');

    let images = document.querySelectorAll('.gallery .photos img');
    let i = 0;

    btnPrev.addEventListener('click', function () {
        images[i].classList.remove('showed');

        animation(images[i], '0px', "100%")

        i--;

        if (i < 0) {
            i = images.length - 1;
        }

        animation(images[i], '-100%')

        images[i].classList.add('showed');
    });

    btnNext.addEventListener('click', function () {
        images[i].classList.remove('showed');

        animation(images[i], '0px', "-100%")

        i++;

        if (i >= images.length) {
            i = 0;
        }

        animation(images[i], '100%')

        images[i].classList.add('showed');
    });

    const animation = (selector, firstParam, secondParam = '0px') => {
        selector.animate([
            {transform: `translateX(${firstParam})`},
            {transform: `translateX(${secondParam})`}
        ], {
            duration: 1000
        })
    }
});
