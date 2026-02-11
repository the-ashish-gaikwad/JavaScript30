let root = document.documentElement;

let spacingInput = document.querySelector("#spacing");
let blurInput = document.querySelector("#blur");
let colorInput = document.querySelector("#color");

spacingInput.addEventListener("mousemove", () => {
    root.style.setProperty('--padding', `${spacingInput.value}px`);
})

blurInput.addEventListener("mousemove", () => {
    root.style.setProperty('--blur', `${blurInput.value}px`);
})

colorInput.addEventListener("change", () => {
    root.style.setProperty('--base', `${colorInput.value}`); 
})
