const $form = document.querySelector("#signup-form"),
  $userName = document.querySelector("#name"),
  $userEmail = document.querySelector("#email"),
  $firstPassword = document.querySelector("#first-password"),
  $confirmPassord = document.querySelector("#confirm-password");

//  console.log($userName, $userEmail, $firstPassword, $confirmPassord);

const usersData = JSON.parse(localStorage.getItem("users")) || [];

const USERNAME_REGEX = /^[A-Za-z0-9_-]{3,}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
const PASSWORD_REGEX = /[a-zA-Z0-9]{8,}/;

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  USERNAME_REGEX.test($userName.value)?($userName.style = `border: 4px solid green;`):($userName.style = `border: 4px solid red;`);
  EMAIL_REGEX.test($userEmail.value)?($userEmail.style = `border: 4px solid green;`):($userEmail.style = `border: 4px solid red;`);
  PASSWORD_REGEX.test($firstPassword.value)?($firstPassword.style = `border: 4px solid green;`):($firstPassword.style = `border: 4px solid red;`);
  $confirmPassord.style = `border: 4px solid red;`;

  if ($firstPassword.value === $confirmPassord.value) {
    PASSWORD_REGEX.test($confirmPassord.value)?($confirmPassord.style = `border: 4px solid green;`):($confirmPassord.style = `border: 4px solid red;`);
    if(EMAIL_REGEX.test($userEmail.value)&& PASSWORD_REGEX.test($firstPassword.value)&&PASSWORD_REGEX.test($confirmPassord.value)){
      let is_error=0
      for(let i in usersData){
        if(usersData[i].username==$userName.value){
          is_error=1
        }else if(usersData[i].email==$userEmail.value){
          is_error=1
        }
      }  
      if(is_error==0){
        let userData = new User($userName.value,$userEmail.value,$firstPassword.value)
          usersData.unshift(userData)
          localStorage.setItem("users", JSON.stringify(usersData))

          location.pathname = "../pages/signin.html";
      }

    }
}

});
