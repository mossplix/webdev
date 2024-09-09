// Add hover effect to timeline icons
        //selects all elements with the class timeline-icon and adds event listeners to scale and rotate them on hover,
        // and revert the transformation when the mouse leaves.
        const timelineIcons = document.querySelectorAll('.timeline-icon');
        timelineIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                icon.style.transform = 'scale(1.2) rotate(360deg)';
                icon.style.transition = 'all 0.5s ease';
            });
            icon.addEventListener('mouseout', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
