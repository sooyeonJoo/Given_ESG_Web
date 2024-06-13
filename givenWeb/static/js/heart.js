document.addEventListener('DOMContentLoaded', () => {
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');
  const messageList = document.getElementById('messageList');
  const commentCountSpan = document.getElementById('commentCount');
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

  // 서버에서 메시지 로드
  function loadMessages() {
    fetch('/get_comments/')
      .then(response => response.json())
      .then(data => {
        data.forEach(comment => {
          const newMessage = createMessageElement(comment.content);
          messageList.appendChild(newMessage);
        });
        updateTreeImages();
      });
  }

  // 서버에서 댓글 수 로드
  function loadCommentCount() {
    fetch('/get_comment_count/')
      .then(response => response.json())
      .then(data => {
        commentCountSpan.textContent = data.count;
      });
  }

  // 전송 버튼 클릭 이벤트 핸들러
  sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
      fetch('/add_comment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ content: messageText })
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          const newMessage = createMessageElement(messageText);
          messageList.appendChild(newMessage);
          messageList.scrollTop = messageList.scrollHeight; // 스크롤

          messageInput.value = ''; // 입력 필드 초기화

          // 나무 이미지를 업데이트
          updateTreeImages();

          // 댓글 수 업데이트
          loadCommentCount();
        } else {
          alert('메시지 전송에 실패했습니다.');
        }
      });
    }
  });

  // CSRF 토큰 가져오는 함수
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  // 초기 로드 시 메시지와 댓글 수 로드
  loadMessages();
  loadCommentCount();
});