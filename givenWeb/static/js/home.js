document.addEventListener("DOMContentLoaded", function() {
  //스크롤 애니메이션
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

  //캐러셀
  const carouselWrap = document.querySelector('.carousel_wrap');
  const slides = document.querySelectorAll('.carousel_slide');
  const prevBtn = document.querySelector('.carousel_btnP');
  const nextBtn = document.querySelector('.carousel_btnN');
  const circles = document.querySelectorAll('.carousel_circle');

  let currentIndex = 0;

  function goToSlide(index) {
    if (index >= slides.length) {
      index = 0;
    } else if (index < 0) {
      index = slides.length - 1;
    }  
    
    currentIndex = index;
    const translateValue = -currentIndex * slides[0].offsetWidth;
    carouselWrap.style.transform = `translateX(${translateValue}px)`;
    updateCircleIndicator();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function updateCircleIndicator() {
    circles.forEach((circle, index) => {
      if (index === currentIndex) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  setInterval(nextSlide, 5000); //5초마다 자동 슬라이드 이동

  updateCircleIndicator(); //초기 인디케이터 상태 업데이트
  circles.forEach((circle, index) => { //인디케이터 동그라미 클릭 시 해당 슬라이드로 이동
    circle.addEventListener('click', () => {
      goToSlide(index);
    });
  });
});
