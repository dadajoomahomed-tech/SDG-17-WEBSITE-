document.addEventListener("DOMContentLoaded", () => {

  // Hero fade-in
  const hero = document.querySelector(".hero-content");
  if(hero) hero.classList.add("visible");

  // Smooth scrolling
  document.querySelectorAll('nav a, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if(target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // Active nav link
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Toggle panels
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      if(panel.classList.contains('active')) {
        panel.classList.remove('active');
        setTimeout(() => panel.style.display = 'none', 500);
      } else {
        panel.style.display = 'block';
        setTimeout(() => panel.classList.add('active'), 10);
      }
    });
  });

  // Form validation
  const form = document.getElementById("contactForm");
  if(form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const feedback = document.getElementById("formMessage");

      if(!name || !email || !message) {
        feedback.textContent = "Please complete all required fields.";
        feedback.style.color = "red";
        return;
      }

      feedback.textContent = "Thank you. Your partnership proposal has been submitted.";
      feedback.style.color = "green";
      form.reset();
    });
  }
});
