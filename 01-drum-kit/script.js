function flash(btn) {
  btn.classList.add("flash")
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 100)
}

window.addEventListener("keydown", (e) => {
  let audio = document.querySelector(`audio[data-key="${e.code}"]`);
  audio.currentTime = 0;
  audio.play();

  let btn = document.querySelector(`.btn[data-key="${e.code}"]`);
  console.log(e.code)
  flash(btn);

})

let btns = document.querySelectorAll(".btn");

function playSound(btn) {
  const soundMap = {
    'clap': 'sounds/clap.wav',
    'hihat': 'sounds/hihat.wav',
    'kick': 'sounds/kick.wav',
    'openhat': 'sounds/openhat.wav',
    'boom': 'sounds/boom.wav',
    'ride': 'sounds/ride.wav',
    'snare': 'sounds/snare.wav',
    'tom': 'sounds/tom.wav',
    'tink': 'sounds/tink.wav',
  };

  const audio = new Audio(soundMap[btn]);
  audio.currentTime = 0;
  audio.play();
}

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    flash(this);
    playSound(this.classList[0]);
  })
});

// // Reusable flash function
// function flash(element) {
//     if (!element) return;
//     element.classList.add("flash");
//     setTimeout(() => {
//         element.classList.remove("flash");
//     }, 100);
// }

// // One function for both keyboard and clicks
// function handleDrum(e) {
//     // ── Determine which key we're dealing with ────────
//     let keyCode;
    
//     if (e.type === "keydown") {
//         keyCode = e.code;           // "KeyA", "KeyS", ...
//         // Optional: ignore if modifier keys are held
//         if (e.ctrlKey || e.altKey || e.metaKey) return;
//     } else {
//         // click event
//         keyCode = e.currentTarget.dataset.key;   // "KeyA", ...
//     }

//     // Find elements
//     const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//     const button = document.querySelector(`[data-key="${keyCode}"]`);

//     if (!audio || !button) return;

//     // Play sound
//     audio.currentTime = 0;
//     audio.play().catch(err => {
//         // Optional: silent catch for aborted plays
//         console.log("Play interrupted:", err);
//     });

//     // Visual feedback
//     flash(button);
// }

// // ── Event listeners ───────────────────────────────────────

// window.addEventListener("keydown", handleDrum);

// document.querySelectorAll(".btn").forEach(btn => {
//     btn.addEventListener("click", handleDrum);
// });