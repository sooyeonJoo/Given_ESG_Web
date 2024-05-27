document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".type .category");
  const allButton = document.querySelector(".type .all");
  const cards = document.querySelectorAll(".money_list .card");
  const modals = document.querySelectorAll(".modal");

  let activeFilters = new Set(); // 활성화된 필터를 저장하는 Set

  filterButtons.forEach(button => {
      button.addEventListener("click", () => {
          const filter = button.getAttribute("data-filter");

          if (filter === "*") { // 모두 보기 버튼 클릭 시
              activeFilters.clear(); // 모든 필터를 비우고
              filterButtons.forEach(btn => btn.classList.remove("active")); // 모든 버튼에서 active 클래스 제거
              allButton.classList.add("active"); // 모두 보기 버튼에만 active 클래스 추가
              showAllCards(); // 모든 카드를 보여줌
          } else {
              allButton.classList.remove("active"); // 모두 보기 버튼의 활성화를 제거
              if (button.classList.contains("active")) {
                  button.classList.remove("active");
                  activeFilters.delete(filter);
              } else {
                  button.classList.add("active");
                  activeFilters.add(filter);
              }
              filterCards();
          }
      });
  });

  function filterCards() {
      if (activeFilters.size === 0) {
          showAllCards(); // 활성화된 필터가 없으면 모든 카드를 보여줌
      } else {
          cards.forEach(card => {
              const cardTags = Array.from(card.querySelectorAll(".tag button")).map(tag => tag.getAttribute("data-type"));
              const isVisible = Array.from(activeFilters).some(filter => cardTags.includes(filter));
              card.style.display = isVisible ? "block" : "none";
          });
      }
  }

  function showAllCards() {
      cards.forEach(card => card.style.display = "block");
  }
 
});




/*모달 기능*/
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// 클릭하여 모달 외부를 클릭하면 닫기
window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}