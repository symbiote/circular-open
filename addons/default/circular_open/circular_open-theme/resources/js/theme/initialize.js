(function (window, document) {

    $('.carousel-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: false,
        arrows: false
    });

    $('.featured-carousel-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: false,
        arrows: false
    });

    function featureSlideAction() {
        const links = document.querySelectorAll('.featured-slides__link');
        for (let link of links) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                if (link) {
                    let slideIndex = parseInt(link.getAttribute('data-slide-index') || "0");
                    $('.featured-carousel-wrapper').slick('slickGoTo', slideIndex - 1);
                }
            })
        }

    }

    featureSlideAction()

})(window, document);
