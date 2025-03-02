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
const linkPicker = document.getElementById('link-color-picker');
const linkHoverPicker = document.getElementById('link-hover-color-picker');

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

// Update link color
linkPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--link-color', e.target.value);
});

// Update link hover color
linkHoverPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--link-hover-color', e.target.value);
});
// Toggle Customizer Panel END------------------------------------------------

// ------------------------- HAMBURGER

// Select the hamburger button and the nav-links container
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the mobile menu and the hamburger animation on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});


// ------------------------- HAMBURGER END


// ------------------------- GSAP NAVBAR

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    let menuOpen = false;

    hamburger.addEventListener("click", () => {
        menuOpen = !menuOpen;

        if (menuOpen) {

            gsap.to(navLinks, {
                duration: 0,
                height: "auto",
                opacity: 1,
                ease: "power2.out",
                display: "block"
            });


            gsap.fromTo(
                navItems,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
            );
        } else {

            gsap.to(navLinks, {
                duration: 0,
                opacity: 0,
                height: 0,
                ease: "power2.in",
                onComplete: () => {
                    navLinks.style.display = "none";
                }
            });
        }

    });
});

// ------------------------- GSAP NAVBAR END

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
        flash.style.top = Math.random() * 40 + "vh"; // Limited to header area
        document.querySelector("header").appendChild(flash);
        setTimeout(() => flash.remove(), 400);
    }, 2500);

    let cursorTrail = document.createElement("div");
    cursorTrail.className = "cursor-trail";
    document.body.appendChild(cursorTrail);

    document.addEventListener("mousemove", (e) => {
        // Position the trail exactly at the cursor (CSS handles centering)
        cursorTrail.style.left = e.clientX + "px";
        cursorTrail.style.top = e.clientY + "px";
    });
});


// ------------------------- PARTICLES END


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
    // Get dynamic colors from CSS
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

    particlesJS("mini-particles", {
      "particles": {
        "number": { "value": 150 }, // Meno particelle per evidenziare le connessioni
        "color": { "value": [primaryColor, accentColor] },
        "shape": { "type": "polygon", "polygon": { "nb_sides": 6 } }, // Particelle esagonali
        "opacity": { "value": 0.1 },
        "size": { "value": 3 },
        "line_linked": { 
          "enable": true, 
          "distance": 120, // Distanza massima per creare connessioni
          "color": primaryColor, 
          "opacity": 0.6, 
          "width": 1.5 
        },
        "move": { "enable": true, "speed": 2 }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" }, // Effetto al passaggio del mouse
          "onclick": { "enable": true, "mode": "push" }, // Click per aggiungere particelle
          "resize": true
        },
        "modes": {
          "grab": { "distance": 140, "line_linked": { "opacity": 0.9 } }, // Effetto "attira" linee col mouse
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });
});


// ------------------------- MINI PARTICLES END


