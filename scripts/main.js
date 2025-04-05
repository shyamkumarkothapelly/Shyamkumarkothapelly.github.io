// Project data (replace with your own projects!)
const projects = [
    {
      title: "Weather App",
      description: "A weather application using API calls.",
      tags: ["web", "js"],
      image: "images/weather-app.jpg", // Replace with your image path
      link: "#"
    },
    {
      title: "Portfolio Template",
      description: "A responsive portfolio template.",
      tags: ["web"],
      image: "images/portfolio-template.jpg",
      link: "#"
    }
  ];
  
  // Render projects
  const projectsGrid = document.querySelector('.projects-grid');
  
  function renderProjects(filter = "all") {
    projectsGrid.innerHTML = '';
    const filteredProjects = filter === "all" 
      ? projects 
      : projects.filter(project => project.tags.includes(filter));
  
    filteredProjects.forEach(project => {
      const projectCard = `
        <div class="project-card" data-tags="${project.tags.join(',')}">
          <img src="${project.image}" alt="${project.title}">
          <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
          </div>
        </div>
      `;
      projectsGrid.innerHTML += projectCard;
    });
  }
  
  // Filter buttons
  document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-buttons button.active').classList.remove('active');
      button.classList.add('active');
      renderProjects(button.dataset.filter);
    });
  });
  
// Contact form feedback
const form = document.querySelector('#contact form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.innerHTML = '<p class="success">Thanks! Your message was sent. 🎉</p>';
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    form.innerHTML = '<p class="error">Oops! Something went wrong. Please try again.</p>';
  }
});

// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Scroll animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

  // Initial render
  renderProjects();