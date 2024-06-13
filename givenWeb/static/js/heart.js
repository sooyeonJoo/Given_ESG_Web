document.addEventListener('DOMContentLoaded', () => {
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');
  const messageList = document.getElementById('messageList');
  const treeElements = document.querySelectorAll('.treeElements img');

  // 메시지 템플릿을 생성하는 함수
  function createMessageElement(messageText) {
    const li = document.createElement('li');
    li.classList.add('message-item');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = messageText;

    li.appendChild(messageDiv);
    return li;
  }

  // 나무 이미지를 업데이트하는 함수
  function updateTreeImages() {
    const messageCount = messageList.children.length;
    const treesToShow = Math.floor(messageCount / 10);

    treeElements.forEach((tree, index) => {
      if (index < treesToShow) {
        tree.style.display = 'block';
      } else {
        tree.style.display = 'none';
      }
    });
  }

  // 전송 버튼 클릭 이벤트 핸들러
  sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
      const newMessage = createMessageElement(messageText);
      messageList.appendChild(newMessage);
      messageList.scrollTop = messageList.scrollHeight; //스크롤

      messageInput.value = ''; // 입력 필드 초기화

      // 나무 이미지를 업데이트
      updateTreeImages();
    }
  });


});