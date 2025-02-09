let input = document.querySelector("[type = text]");
let btn = document.querySelector("[type = submit]");
let result_div = document.querySelector(".result");
let result_content_div = document.querySelector(".result .result-content");

let todo = [];

document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    if (input.value !== "") {
        addTask();
        clearInputValue();
        displayValue();
    } else {
        alert("Please Fill Input");
    }
};

function addTask() {

    let obj = {
        inputValue: input.value,
    };
    todo.push(obj);
    localStorage.setItem("todo", JSON.stringify(todo));
}
function clearInputValue() {
    input.value = "";
}

function displayValue() {
    let box = "";
    for (let i = 0; i < todo.length; i++) {
        box += `
        <div class = result-content >
            <p>${todo[i].inputValue}</p>
            <button onclick = deleteValue(${i}) >Delete</button>
        </div>
        `;
    }
    result_div.innerHTML = box;
}

if (localStorage.getItem("todo") !== null) {
    todo = JSON.parse(localStorage.getItem("todo"));
    displayValue();
} else {
    todo = [];
}

function deleteValue(deleteIndex) {

    let confirmMsg = confirm("Are You Sure ?");
    if (confirmMsg === true) {

        todo.splice(deleteIndex, 1);
        localStorage.setItem("todo", JSON.stringify(todo));
        displayValue();
        
    }
}