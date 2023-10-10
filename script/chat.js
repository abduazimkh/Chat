const firstItem = document.querySelector(".first-item"),
chatWrapper = document.querySelector(".chat-wrapper"),
write = document.querySelector(".write");

var newUsersData = JSON.parse(localStorage.getItem("new-users")) || [];

const documentFragment = document.createDocumentFragment();
for(let i = 0; i < newUsersData.length-1; i++){
    
    const ul = document.createElement("ul");
    ul.classList = "chat-user clicked";
    ul.innerHTML = `
        <img src="${newUsersData[i].img}" alt="">
        <p>${newUsersData[i].username}</p>
    `;
    documentFragment.appendChild(ul);
}

const ul = document.createElement("ul");
ul.classList = "chat-user last-ul";
ul.innerHTML = `
    <img src="${newUsersData[newUsersData.length-1].img}" alt="">
    <p>${newUsersData[newUsersData.length-1].username}</p>
`;
documentFragment.appendChild(ul);

firstItem.appendChild(documentFragment);    

chatWrapper.addEventListener("click", (e) => {
    if(e.target.closest(".clicked")){
        console.log();
        // write.appendChild(e.target.closest(".clicked"))
    }
})

