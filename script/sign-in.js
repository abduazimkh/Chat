const form = document.querySelector("form"),
    userName = form.querySelector(".name"),
    password = form.querySelector(".password")

const USERNAME_REGEX = /^[A-Za-z0-9_-]{3,}$/;
const PASSWORD_REGEX = /[a-zA-Z0-9]{8,}/;
    
const usersData = JSON.parse(localStorage.getItem("users")) || [];

var newUsersData = JSON.parse(localStorage.getItem("new-users")) || []

form.addEventListener('submit', (e) => {
    e.preventDefault();

    userName.style = `border: 4px solid red;`
    password.style = `border: 4px solid red;`
    usersData.forEach(el => {
        if(userName.value==el.username && password.value==el.password){
            USERNAME_REGEX.test(userName.value)?(userName.style = `border: 4px solid green;`):(userName.style = `border: 4px solid red;`);
            PASSWORD_REGEX.test(password.value)?(password.style = `border: 4px solid green;`):(password.style = `border: 4px solid red;`);        

            let is_error=0
            for(let i in newUsersData){
                if(newUsersData[i].username==userName.value){
                    is_error=1

                }else if(newUsersData[i].email==password.value){
                    is_error=1

                }

            }

            if(is_error==0){
                newUsersData.push(el)
                localStorage.setItem("new-users", JSON.stringify(newUsersData))
            }

            userName.value = ""
            password.value = ""
            location.pathname = "./pages/user.html"

            // location.replace(location.origin+"./pages/user.html")
        }
    })

})
