let btns = document.querySelectorAll(".btn");

function flash(btn) {
  btn.classList.add("flash")
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 100)
}

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

// event delegation
btns.forEach((btn, event) => {
  btn.addEventListener("click", function () {
    flash(this);
    playSound(this.classList[0]);
  })
});

// Map keys to sound files
const soundMap = {
  'KeyA': 'sounds/clap.wav',
  'KeyS': 'sounds/hihat.wav',
  'KeyD': 'sounds/kick.wav',
  'KeyF': 'sounds/openhat.wav',
  'KeyG': 'sounds/boom.wav',
  'KeyH': 'sounds/ride.wav',
  'KeyJ': 'sounds/snare.wav',
  'KeyK': 'sounds/tom.wav',
  'KeyL': 'sounds/tink.wav',
};

document.addEventListener('keydown', (event) => {
  const soundPath = soundMap[event.code];

  if (soundPath) {
    const audio = new Audio(soundPath);
    audio.currentTime = 0; 
    audio.play();
  }

  if (event.code == "KeyA") {
    document.querySelector(".clap").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".clap").classList.remove("flash");
    }, 100)
  } else if (event.code == "KeyS") {
    document.querySelector(".hihat").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".hihat").classList.remove("flash");
    }, 100)
  } else if (event.code == "KeyD") {
    document.querySelector(".kick").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".kick").classList.remove("flash");
    }, 100)
  } else if (event.code == "KeyF") {
    document.querySelector(".openhat").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".openhat").classList.remove("flash");
    }, 100)
  } else if (event.code == "KeyG") {
    document.querySelector(".boom").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".boom").classList.remove("flash");
    }, 100)
  } else if (event.code == "KeyH") {
    document.querySelector(".ride").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".ride").classList.remove("flash");
    }, 100)
  } else if (event.code == "KeyJ") {
    document.querySelector(".snare").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".snare").classList.remove("flash");
    }, 100)
  } else if (event.code == "KeyK") {
    document.querySelector(".tom").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".tom").classList.remove("flash");
    }, 100)
  } else if (event.code == "KeyL") {
    document.querySelector(".tink").classList.add("flash");
    setTimeout(() => {
      document.querySelector(".tink").classList.remove("flash");
    }, 100)
  }
});
