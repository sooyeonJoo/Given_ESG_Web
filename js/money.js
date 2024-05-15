// 모달 창 열기
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// 모달 창 닫기
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// 모달 영역 외부를 클릭하면 모달 닫기
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      closeModal();
  }
};