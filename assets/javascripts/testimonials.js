const filterButtons = document.querySelectorAll('.filter-button'); // Get all filter buttons
const testimonialCards = document.querySelectorAll('.testimonial-card'); // Get all testimonial cards

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter'); // Get the filter value from the button's data attribute
        
        filterButtons.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
        button.classList.add('active'); // Add 'active' class to the clicked button

        testimonialCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block'; // Show the card if it matches the filter or if the filter is 'all'
            } else {
                card.style.display = 'none'; // Hide the card if it doesn't match the filter
            }
        });
    });
});

