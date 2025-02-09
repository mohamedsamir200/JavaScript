let lis = document.querySelectorAll("li");
let mainDiv = document.querySelector(".experiment");

if (localStorage.getItem("color") !== null) {
    mainDiv.style.backgroundColor = localStorage.getItem("color");

    // remove active class 
    lis.forEach((li) => {
        li.classList.remove("active");
    });

    // add active class 
    document.querySelector(`[data-color = ${localStorage.getItem("color")}`).classList.add("active");
}

lis.forEach((li) => li.addEventListener("click", function () {
    let colorName = li.getAttribute("data-color");
    localStorage.setItem("color", colorName);
    mainDiv.style.backgroundColor = localStorage.getItem("color");

    // remove active class 
    lis.forEach((li) => li.classList.remove("active"));

    // add active class 
    li.classList.add("active");
}));    