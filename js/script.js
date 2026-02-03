/* ========================= typing animation ========================= */
var typed = new Typed(".typing",{
    strings: ["Full-Stack Developer", "Mobile App Developer", "WebApp Developer", "UI/UX Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
})

// update active class when clicked
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Remove active class from all links
                navLinks.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Scroll to section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL
                history.pushState(null, null, targetId);
            }
        });
    });
});

