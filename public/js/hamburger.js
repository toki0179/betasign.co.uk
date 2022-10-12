function myFunction() {
    var navLinks = document.getElementById("header");
    if (navLinks.classList.contains("mobileHeader-active") ) {
        navLinks.classList.remove("mobileHeader-active");
    } else {
        navLinks.classList.add("mobileHeader-active");
    }

    var headerLogo = document.getElementById("headerLogo");
    if (headerLogo.classList.contains("header-logo-mobile") ) {
        headerLogo.classList.remove("header-logo-mobile");
    } else {
        headerLogo.classList.add("header-logo-mobile");
    }

    var navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("header-text-mobile") ) {
        navLinks.classList.remove("header-text-mobile");
    } else {
        navLinks.classList.add("header-text-mobile");
    }

    var hamburger = document.getElementById("hamburger-image");
    if (hamburger.classList.contains("hamburger-active") ) {
        hamburger.classList.remove("hamburger-active");
    } else {
        hamburger.classList.add("hamburger-active");
    }
}