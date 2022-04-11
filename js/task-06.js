const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {
    if (inputText.value.length <= inputText.dataset.length) {
        inputText.classList.add('valid');
        return
    }
    inputText.classList.add('invalid');
})
