const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}


// SOUND
const soundButtons = document.querySelectorAll(".buttonSound");

// Function untuk menghentikan semua audio yang sedang dimainkan
function stopAllSounds() {
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0; // Reset audio ke awal
  });
}
soundButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const audio = button.getElementsByTagName("audio")[0];
    stopAllSounds();
    const onOffIcon = button.getElementsByTagName("img")[0];
    if (onOffIcon.getAttribute("src") === "asset/img/mute.png") {
      onOffIcon.setAttribute("src", "asset/img/play.png");
      audio.play();
    } else {
      onOffIcon.setAttribute("src", "asset/img/mute.png");
      audio.pause();
    }
  });
});

function popupOpen(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.classList.add("active")
  }

}
function popupClose(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.classList.remove("active");
  }
}


