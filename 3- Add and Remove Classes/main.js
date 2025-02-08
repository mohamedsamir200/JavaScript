let add_input = document.querySelector(".classes-to-add");
let remove_input = document.querySelector(".classes-to-remove");
let div_result = document.querySelector(".result");


add_input.onblur = function () {
    if (add_input.value.trim() === "") return;

    if (add_input.value === "") {
        alert("please fill inputs");
    } else {
        if (add_input.value.includes(" ")) {

            let word = add_input.value.trim().replace(/\s+/g, " ").split(" ");
            word.forEach(element => {
                div_result.innerHTML += `<p class = ${element.trim().replace(/\s+/g, " ").toLowerCase()} > ${element.trim().replace(/\s+/g, " ").toLowerCase()} </p>`;
            });
        } else {
            div_result.innerHTML += `<p class = ${add_input.value.trim().replace(/\s+/g, " ").toLowerCase()} > ${add_input.value.trim().replace(/\s+/g, " ").toLowerCase()} </p>`;
        }
    }
    add_input.value = "";
};
// Add classes

// Remove classes
remove_input.onblur = function () {
    let removeWords = remove_input.value.toLowerCase().trim().split(" ");
    removeWords.forEach(word => {
        let elements = document.querySelectorAll(`.${word}`);
        elements.forEach(el => el.remove());
    });
    remove_input.value = "";
};

