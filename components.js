let buttons = document.querySelectorAll('button');
let val = document.querySelector('input');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        val.value = button.value;
    })
})