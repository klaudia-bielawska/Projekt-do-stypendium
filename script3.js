function setupGalleries() {
    const galleries = document.querySelectorAll('.slideshow-cont'); // Find all galleries

    galleries.forEach((gallery, index) => {
        let slideIndex = 0; // Track the index for this specific gallery
        const slides = gallery.querySelectorAll('.slide');
        const dots = gallery.nextElementSibling.querySelectorAll('.dot');

        function showSlides() {
            slides.forEach((slide, i) => {
                slide.style.display = 'none'; // Hide all slides
            });

            dots.forEach((dot) => {
                dot.className = dot.className.replace(' active', ''); // Deactivate all dots
            });

            slides[slideIndex].style.display = 'block'; // Show the current slide
            dots[slideIndex].className += ' active'; // Activate the corresponding dot

            slideIndex = (slideIndex + 1) % slides.length; // Cycle through slides
            setTimeout(showSlides, 4000); // Repeat every 4 seconds
        }

        // Initialize by showing the first slide and dot
        slides[0].style.display = 'block';
        dots[0].className += ' active';

        showSlides(); // Start the slideshow
    });
}

setupGalleries(); // Run the function to initialize all galleries
