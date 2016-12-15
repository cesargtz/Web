document.addEventListener("scroll", function() {
    scrollHeight = window.pageYOffset;
    document.getElementsByClassName("brand-image")[0].style.height = scrollHeight >= 200 ? "50px" : "";
}, false);
