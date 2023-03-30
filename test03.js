"use strict";
window.onload = function() {
  const loginButton = document.getElementById('tt');
  const signupBtn = document.getElementById('signup-btn');

  //회원가입 동작//
  signupBtn.addEventListener('click', function(event) {
    event.preventDefault(); // 기본 이벤트를 취소합니다.
  
    // 새로운 창을 열어 회원가입 폼을 보여줍니다.
    window.location.href = 'test2.html','_self';
  });

  //로그인 동작// 
  loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    
    if (id.trim() === '') {
      alert('아이디를 입력하세요.');
      document.getElementById('id').focus();
    } else if (password.trim() === '') {
      alert('비밀번호를 입력하세요.');
      document.getElementById('password').focus();
    } else {
      // 아이디와 비밀번호가 모두 입력된 경우 로그인 처리 로직을 넣어줍니다.
    }
  });
}; 