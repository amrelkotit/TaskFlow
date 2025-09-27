document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('addTaskBtn');
  const signUpBtn = document.getElementById('signUpBtn');

  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
      document.getElementById('taskList').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
      document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const animatedSections = document.querySelectorAll('section, main, footer');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedSections.forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
  });
});
