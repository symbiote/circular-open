(function (window, document) {

    var navLogo = document.querySelectorAll(".nav__logo")[0];
    navLogo.src = "/images/logo_static.png";

    navLogo.addEventListener('mouseenter', e => {
        navLogo.src = "/images/logo.gif";
    });

    navLogo.addEventListener('mouseleave', e => {
        navLogo.src = "/images/logo_static.png";
    });

})(window, document);
