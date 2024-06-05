document.addEventListener("DOMContentLoaded", function() {
  const receTab = document.getElementById('rece_tab');
  const likeTab = document.getElementById('like_tab');
  const receCon = document.querySelector('.rece_con');
  const likeCon = document.querySelector('.like_con');
  const toogleBtns = document.querySelectorAll('.toggle_btn');

  // 최근 본 목록 클릭 시
  receTab.addEventListener('click', function() {
    receCon.style.display = 'flex';
    likeCon.style.display = 'none';
  });

  // 찜한 목록 클릭 시
  likeTab.addEventListener('click', function() {
    receCon.style.display = 'none';
    likeCon.style.display = 'block';
  });

  // 토글 버튼 클릭 시
  toogleBtns.forEach(function(toogleBtn) {
    toogleBtn.addEventListener('click', function() {
      const fileCardcon = toogleBtn.parentElement.nextElementSibling;
      fileCardcon.classList.toggle('visible');
      toogleBtn.classList.toggle('rotate');
    });
  });
});