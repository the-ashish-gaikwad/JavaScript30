let root = document.documentElement;

let spacingInput = document.querySelector("#spacing");
let blurInput = document.querySelector("#blur");
let colorInput = document.querySelector("#color");

function changeSpacing() {
    root.style.setProperty('--padding', `${spacingInput.value}px`);
}

function changeFilter() {
    root.style.setProperty('--blur', `${blurInput.value}px`);
}

function changeColor() {
    root.style.setProperty('--base', `${colorInput.value}`); 
}

spacingInput.addEventListener("mousemove", changeSpacing);
spacingInput.addEventListener("touchmove", changeSpacing);

blurInput.addEventListener("mousemove", changeFilter);
blurInput.addEventListener("touchmove", changeFilter);

colorInput.addEventListener("change", changeColor);
