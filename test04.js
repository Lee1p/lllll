window.onload = function() {
    let idInput = document.getElementById("email");
    let birthdateInput = document.getElementById("birthdate");
    let nameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let passwordConfirmInput = document.getElementById("password-confirm");
    let cityInputs = document.getElementsByName("city");
  
    idInput.addEventListener("input", () => {
      const regex = /[^a-zA-Z0-9]/g;
      if (regex.test(idInput.value)) {
        alert("영어와 숫자로만 구성가능합니다...");
        idInput.value = idInput.value.replace(regex, "");
      }
      if (idInput.value.length > 11) {
        idInput.value = idInput.value.slice(0, 11);
      }
    });
  
    birthdateInput.addEventListener("input", function(event) {
      var inputStr = this.value;
      var numRegexp = /^[0-9]+$/;
  
      if (!numRegexp.test(inputStr)) {
        this.setCustomValidity("숫자만 입력해주세요.");
        this.reportValidity();
      } else {
        this.setCustomValidity("");
      }
    });
    nameInput.addEventListener("input", () => {
      if (nameInput.value.length > 5) {
        nameInput.value = nameInput.value.slice(0, 5);
      }
    });
    passwordInput.addEventListener("input", () => {
      if (passwordInput.value.length > 13) {
        passwordInput.value = passwordInput.value.slice(0, 13);
      }
    });
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener("click", function(event) {
      if (
        nameInput.value === "" ||
        birthdateInput.value === "" ||
        idInput.value === "" ||
        passwordInput.value === "" ||
        passwordConfirmInput.value === ""
        ) {
          alert("입력되지 않은 정보가 있습니다.");
          event.preventDefault();
        } else if (passwordInput.value !== passwordConfirmInput.value) {
          alert("비밀번호가 일치하지 않습니다.");
          passwordConfirmInput.value = "";
          passwordConfirmInput.focus(); // 오류가 발생한 입력칸에 포커스 이동
          event.preventDefault();
        } else if (!/^([가-힣]{2,})$/.test(nameInput.value)) {
            alert("이름은 한글만 입력해주세요.");
            nameInput.focus(); // 오류가 발생한 입력칸에 포커스 이동
            event.preventDefault();
        } else if (idInput.value.length < 4) {
          alert("아이디는 4글자 이상이어야 합니다.");
          idInput.focus(); // 오류가 발생한 입력칸에 포커스 이동
          event.preventDefault();
        } else if (birthdateInput.value.length !== 6) {
          alert("생년월일은 6자리로 입력해주세요.");
          birthdateInput.focus(); // 오류가 발생한 입력칸에 포커스 이동
          event.preventDefault();
        } else if (!cityInputs[0].checked && !cityInputs[1].checked) {
          alert("도시를 선택해주세요.");
          event.preventDefault();
        } else {
          alert("가입이 완료되었습니다.");
        }
      });
  const form = document.querySelector("form");
  const usernameInput = document.querySelector("#username");
  
  usernameInput.addEventListener("input", () => {
    const regex = /^[가-힣]+$/;
    if (!regex.test(usernameInput.value)) {
      usernameInput.setCustomValidity("한글만 입력해주세요.(초성만x)");
      usernameInput.reportValidity();
    } else {
      usernameInput.setCustomValidity("");
    }
  });
  
  };
  
  test03.js 
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
      } else if (password.trim() === '') {
        alert('비밀번호를 입력하세요.');
      } else {
        // 아이디와 비밀번호가 모두 입력된 경우 로그인 처리 로직을 넣어줍니다.
      }
    });
  }; 
  