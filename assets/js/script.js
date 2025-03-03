// JavaScript for OnePage Elite Keyblade Template

// Toggle Customizer Panel------------------------------------------------
const toggleBtn = document.getElementById('customizer-toggle');
const customizer = document.getElementById('theme-customizer');
const closeBtn = document.getElementById('customizer-close');

toggleBtn.addEventListener('click', function () {
    customizer.classList.add('open');
});

closeBtn.addEventListener('click', function () {
    customizer.classList.remove('open');
});

// Set up event listeners for color pickers
const primaryPicker = document.getElementById('primary-color-picker');
const accentPicker = document.getElementById('accent-color-picker');


// Update primary color and related gradients
primaryPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--primary-color', e.target.value);
    document.documentElement.style.setProperty('--btn-bg', `linear-gradient(90deg, ${e.target.value}, var(--accent-color))`);
    document.documentElement.style.setProperty('--header-bg', `linear-gradient(90deg, ${e.target.value}, var(--accent-color))`);
});

// Update accent color and related gradients
accentPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--accent-color', e.target.value);
    document.documentElement.style.setProperty('--btn-bg', `linear-gradient(90deg, var(--primary-color), ${e.target.value})`);
    document.documentElement.style.setProperty('--header-bg', `linear-gradient(90deg, var(--primary-color), ${e.target.value})`);
});


// Toggle Customizer Panel END------------------------------------------------

// ------------------------- HAMBURGER


// Select the hamburger button and the navigation links container
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Function to open the menu with GSAP animation
function openMenu() {
    // Add active class to hamburger and open class to navigation links
    hamburger.classList.add('active');
    navLinks.classList.add('open');

    // Animate the links appearing one by one with a slight delay
    gsap.fromTo(links,
        { opacity: 0, y: 20 }, // Start with links invisible and moved down
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 } // Animate to full opacity and normal position
    );
}

// Function to close the menu
function closeMenu() {
    // Animate the links disappearing before closing the menu
    gsap.to(links, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: -0.1,
        onComplete: () => {
            // Remove active/open classes after animation completes
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');

            // Ensure links remain visible when reopening the menu
            gsap.set(links, { opacity: 1, y: 0 });
        }
    });
}

// Toggle menu when clicking on the hamburger button
hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event bubbling
    if (navLinks.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close the menu when clicking on a navigation link
links.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('open') && !navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        closeMenu();
    }
});



// ------------------------- HAMBURGER END

// ------------------------- PARTICLES 

document.addEventListener("DOMContentLoaded", function () {
    let primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary-color").trim();
    let secondaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--secondary-color").trim();
    let accentColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-color").trim();

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 400,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": [primaryColor, secondaryColor, accentColor]
            },
            "shape": {
                "type": ["circle", "triangle"],
                "stroke": {
                    "width": 1,
                    "color": "#222222"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 90,
                "color": primaryColor,
                "opacity": 0.5,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 120,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 80,
                    "size": 8,
                    "duration": 1.5,
                    "opacity": 0.9,
                    "color": accentColor
                },
                "repulse": {
                    "distance": 150,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 5
                }
            }
        },
        "retina_detect": true
    });

    setInterval(() => {
        let flash = document.createElement("div");
        flash.className = "particle-glow";
        flash.style.left = Math.random() * 100 + "vw";
        flash.style.top = Math.random() * 40 + "vh";
        document.querySelector("header").appendChild(flash);
        setTimeout(() => flash.remove(), 400);
    }, 2500);

    let cursorTrail = document.createElement("div");
    cursorTrail.className = "cursor-trail";
    document.body.appendChild(cursorTrail);

    document.addEventListener("mousemove", (e) => {

        cursorTrail.style.left = e.clientX + "px";
        cursorTrail.style.top = e.clientY + "px";
    });
});



// ------------------------- PARTICLES END

// particles customizer

function initParticles() {
    const primaryColor = document.querySelector("#primary-color-picker").value;
    const accentColor = document.querySelector("#accent-color-picker").value;

    particlesJS("customizer-panel-particles", {
        particles: {
            number: { value: 100 },
            color: { value: [primaryColor, accentColor] },
            shape: { type: "circle" },
            opacity: { value: 0.7, anim: { enable: true, speed: 1 } },
            size: { value: 4, anim: { enable: true, speed: 2 } },
            move: {
                speed: 2,
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "grab" }, // Attraction Effect
                onclick: { enable: true, mode: "bubble" }
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } }, // Connection Effect
                bubble: { size: 40, distance: 400 } // CLick Boom
            }
        }
    });
}


initParticles();

// Change colors
document.querySelector("#primary-color-picker").addEventListener("input", initParticles);
document.querySelector("#accent-color-picker").addEventListener("input", initParticles);


// particles customizer END

// ------------------------- TYPED 

document.addEventListener("DOMContentLoaded", function () {
    // Initialize typed text effect
    var typed = new Typed("#typed-text", {
        strings: [
            "Feel free to explore advanced design.",
            "Feel free to craft your own style."
        ],
        typeSpeed: 40,    // Speed of typing
        backSpeed: 20,    // Speed of backspacing
        backDelay: 3000,  // Delay before backspacing
        loop: true        // Loop the typing effect
    });

    // Optional: Scroll down button behavior
    var scrollBtn = document.querySelector(".scroll-down-btn");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", function () {
            // Smooth scroll to next section
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        });
    }
});

// ------------------------- TYPED END

// ------------------------- MINI PARTICLES

document.addEventListener("DOMContentLoaded", function () {

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

    particlesJS("mini-particles", {
        "particles": {
            "number": { "value": 150 },
            "color": { "value": [primaryColor, accentColor] },
            "shape": { "type": "polygon", "polygon": { "nb_sides": 6 } },
            "opacity": { "value": 0.1 },
            "size": { "value": 3 },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": primaryColor,
                "opacity": 0.6,
                "width": 1.5
            },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 0.9 } },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
});


// ------------------------- MINI PARTICLES END


// ------------------------- PORTFOLIO MODAL

document.addEventListener('DOMContentLoaded', function () {
    var portfolioModal = document.getElementById('portfolioModal');
    var activePortfolioItem = null; // Store the portfolio item that triggered the modal

    // Update modal content when it is shown and store the triggering portfolio item
    portfolioModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        activePortfolioItem = button.closest('.portfolio-item');

        // Retrieve custom data attributes from the button
        var title = button.getAttribute('data-title');
        var description = button.getAttribute('data-description');
        var image = button.getAttribute('data-image');

        // Select modal elements
        var modalTitle = portfolioModal.querySelector('.modal-title');
        var modalImage = portfolioModal.querySelector('#modalProjectImage');
        var modalDescription = portfolioModal.querySelector('#modalProjectDescription');

        // Update modal content with the new data
        modalTitle.textContent = title;
        modalImage.src = image;
        modalImage.alt = title;
        modalDescription.textContent = description;
    });

    // When the modal is hidden, trigger a CSS animation on the active portfolio item's overlay
    portfolioModal.addEventListener('hidden.bs.modal', function () {
        // Remove inline styles from all overlays as a fallback
        var overlays = document.querySelectorAll('.portfolio-overlay');
        overlays.forEach(function (overlay) {
            overlay.removeAttribute('style');
        });

        // If an active portfolio item exists, animate its overlay to reset to default state
        if (activePortfolioItem) {
            var overlay = activePortfolioItem.querySelector('.portfolio-overlay');
            if (overlay) {
                // Add the CSS class that triggers the reset animation
                overlay.classList.add('reset-overlay');
                // After the animation duration (500ms), remove the class and any inline styles
                setTimeout(function () {
                    overlay.classList.remove('reset-overlay');
                    overlay.removeAttribute('style');
                    activePortfolioItem = null;
                }, 500);
            }
        }

        // Optionally refresh AOS animations if AOS is used
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    });
});

//   ---------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Mapping of project IDs to modal content
    var projectDetails = {
        project1: {
            title: "Landing Page",
            description: "This is a customizable landing page template. Replace this text with your own content to showcase your project’s unique features, design, and message.",
            image: "assets/images/project1.png"
        },
        project2: {
            title: "Business Dashboard",
            description: "This dashboard template is designed for versatility. Insert your project details here to highlight data-driven layouts and functionalities that suit your business needs.",
            image: "assets/images/project2.png"
        },
        project3: {
            title: "Artistic Showcase",
            description: "This gallery page serves as a blank canvas for your creative work. Replace this description with details about your artistic vision, style, and projects.",
            image: "assets/images/project3.png"
        }
        // Add more projects as needed
    };

    var portfolioModal = document.getElementById('portfolioModal');

    // Listen for click events on all project buttons within portfolio items
    var projectButtons = document.querySelectorAll('.portfolio-item a.btn');
    projectButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var projectId = button.getAttribute('data-project');
            var details = projectDetails[projectId];

            // Select modal elements
            var modalTitle = portfolioModal.querySelector('.modal-title');
            var modalImage = portfolioModal.querySelector('#modalProjectImage');
            var modalDescription = portfolioModal.querySelector('#modalProjectDescription');

            // Update modal content with details from the mapping
            if (details) {
                modalTitle.textContent = details.title;
                modalImage.src = details.image;
                modalImage.alt = details.title;
                modalDescription.textContent = details.description;
            }
        });
    });
});


// ------------------------- PORTFOLIO MODAL END

// ------------------------- TESTIMONIALS

var testimonialSwiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      // Tablets
      768: {
        slidesPerView: 2
      },
      // Desktops
      992: {
        slidesPerView: 4
      }
    }
  });

// ------------------------- TESTIMONIALS END








