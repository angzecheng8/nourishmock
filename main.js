import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Add shrinking effect to navbar on scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '1rem 2rem';
      navbar.style.background = 'rgba(238, 237, 201, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    } else {
      navbar.style.padding = '1.5rem 2rem';
      navbar.style.background = 'rgba(238, 237, 201, 0.9)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Example entry for generating an image dynamically if needed
  // This will be replaced by actual generated assets dynamically
  console.log('Nourish App Initialized');
});
