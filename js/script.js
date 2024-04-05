// JavaScript for slideshow
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Call the function when the page loads
window.onload = function() {
    showSlides();
};

function playTrailer() {
    var trailer = document.getElementById('trailer');
    var trailerBtn = document.querySelector('.btn-watch');
    if(trailer.style.display === 'block') {
        trailerBtn.textContent = 'Watch Trailer';
        trailer.style.display = 'none';
        return;
    }
    trailerBtn.textContent = 'Close Trailer';
    trailer.style.display = 'block';
}


function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Show "Thank you" message in an alert box
    alert('Thank you for the feedback!');
}


// JavaScript code to trigger left-to-right animation for features section

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when features section is in viewport
function animateFeatures() {
    const featuresSection = document.querySelector('.features');
    if (isInViewport(featuresSection)) {
        featuresSection.classList.add('animate-left-to-right');
        // Remove the event listener after animation is triggered to prevent multiple animations
        window.removeEventListener('scroll', animateFeatures);
    }
}

// Add event listener to trigger animation when user scrolls
window.addEventListener('scroll', animateFeatures);

// Trigger animation on page load if features section is initially in viewport
animateFeatures();

