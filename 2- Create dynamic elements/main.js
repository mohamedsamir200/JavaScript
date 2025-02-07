let number_of_element = document.forms[0].children[0];
let element_text = document.forms[0].children[1];
let select_div = document.forms[0].children[2];
let submit_btn = document.forms[0].children[3];


document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    createElements();
};

function createElements() {
    if (number_of_element.value !== "" || element_text.value !== "") {
        document.querySelector(".all-boxes").innerHTML = "";
        for (let i = 1; i <= number_of_element.value; i++) {
            document.querySelector(".all-boxes").innerHTML +=
                `<${select_div.value} class="box" title="Element" id="id-${i}">${element_text.value}</${select_div.value}>`;
        }
    }
    else {
        alert(" Please Fill All Inputs ");
    }
}

