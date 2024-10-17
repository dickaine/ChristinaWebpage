let currentIndex = 0;
const textItems = document.querySelectorAll('.carousel-text div');

function showNextText() {
    // Hide the current text
    textItems[currentIndex].classList.remove('active');

    // Increment the index
    currentIndex = (currentIndex + 1) % textItems.length;

    // Show the next text
    textItems[currentIndex].classList.add('active');
}

// Initial display of the first text
textItems[currentIndex].classList.add('active');

// Automatically cycle through text every 3 seconds
setInterval(showNextText, 10000);