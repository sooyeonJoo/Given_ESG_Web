document.addEventListener("DOMContentLoaded", function() {
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const elements = document.querySelectorAll('.ani, .ani_delay, .esg_circle, .given_title, .square, .square2');
  elements.forEach(element => {
    observer.observe(element);
  });
});
