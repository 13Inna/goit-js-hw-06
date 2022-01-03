const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

 

const onInputValue = e => {
    if (e.target.value) {
     outputEl.textContent = e.target.value;   
    }
    else {
        outputEl.textContent = 'Anonymous';
    }
    
}

inputEl.addEventListener("input", onInputValue);