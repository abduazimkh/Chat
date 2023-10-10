const img1 = document.querySelector(".first"), 
img2 = document.querySelector(".second"), 
img3 = document.querySelector(".third"), 
img4 = document.querySelector(".last"),
userBtn = document.querySelector(".user-btn");

let images = [img1, img2, img3, img4];

var newUsersData = JSON.parse(localStorage.getItem("new-users")) || []


for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", () => {
        newUsersData.at(-1).img = images[i].src
        localStorage.setItem("new-users", JSON.stringify(newUsersData))

        userBtn.addEventListener("click", () => {
            location.pathname = "../pages/chat.html";
        })
    })
}


