const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputValue);
function onInputValue(value) {
    outputEl.textContent = value.currentTarget.value;
}