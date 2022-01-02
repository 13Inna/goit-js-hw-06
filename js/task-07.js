const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

const onInpuChange = (event) => {
    const { value } = event.target;
    refs.text.style.fontSize = `${value}px`;
};

refs.input.addEventListener('input', onInpuChange);
