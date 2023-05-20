const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(); //stop bubbling!
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, //true makes it go from the bottom level down (starts from body)
}));

btn.addEventListener('click', () => {
    console.log('Click!!');
}, {
    once: true //will remove the event listener from the div element; can be used in store checkouts
})