// JavaScript for OnePage Elite Keyblade Template

  // Toggle Customizer Panel------------------------------------------------
  const toggleBtn = document.getElementById('customizer-toggle');
  const customizer = document.getElementById('theme-customizer');
  const closeBtn = document.getElementById('customizer-close');

  toggleBtn.addEventListener('click', function() {
    customizer.classList.add('open');
  });

  closeBtn.addEventListener('click', function() {
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





    
    