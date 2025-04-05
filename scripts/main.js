// Project data without images
const projects = [
    {
        title: "Portfolio Template",
        description: "Responsive portfolio template with modern design",
        status: "completed",
        progress: 100,
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: "#"
    },
    {
      title: "Legal Consultation Platform",
      description: "Online portal connecting clients with verified lawyers",
      status: "completed",
      progress: 100,
      tech: ["HTML/CSS/BootStrap/JavaScript", "Ms Sql Server", "Asp.Net Core"],
      link: "#"
    },
    {
      title: "Matrimonial Matchmaking",
      description: "AI-powered compatibility matching platform",
      status: "progress",
      progress: 35,
      link: "#"
    },
    {
      title: "Restaurant Booking System",
      description: "Table reservations with live menu previews",
      status: "planned",
      startDate: "July 2025",
      link: "#"
    },
    {
      title: "Community Engagement Hub",
      description: "Platform connecting NRIs worldwide to preserve culture, share resources, and build local communities. Features regional subgroups, event coordination, and cultural exchange forums.",
      status: "planned",
      startDate: "September 2025",
      link: "#"
    }

  ];
  
  // Render projects
  function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
  
    projects.forEach(project => {
      let statusBadge = '';
      let progressElement = '';
      let techStack = '';
  
      // Status badge
      if (project.status === 'completed') {
        statusBadge = `<div class="status-badge">Completed</div>`;
        techStack = `<div class="tech-stack">${project.tech.map(tech => `<span>${tech}</span>`).join('')}</div>`;
      } 
      else if (project.status === 'progress') {
        statusBadge = `<div class="status-badge">In Progress</div>`;
        progressElement = `
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${project.progress}%"></div>
          </div>
          <span class="progress-text">${project.progress}% completed</span>
        `;
      }
      else if (project.status === 'planned') {
        statusBadge = `<div class="status-badge">Coming Soon</div>`;
        progressElement = `<div class="timeline"><span>🚀 Planned Start: ${project.startDate}</span></div>`;
      }
  
      const projectCard = `
        <div class="project-card" data-status="${project.status}">
          ${statusBadge}
          <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${techStack || ''}
            ${progressElement || ''}
            <a href="${project.link}" class="btn">View Details</a>
          </div>
        </div>
      `;
  
      projectsGrid.innerHTML += projectCard;
    });
  }
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', renderProjects);
  
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