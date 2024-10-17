let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.top = "-115px"; // Hide the header
    } else {
        // Scrolling up
        header.style.top = "0"; // Show the header
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});