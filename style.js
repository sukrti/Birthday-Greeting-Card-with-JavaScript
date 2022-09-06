var openBtn;
let audioElement = new Audio();
document.addEventListener("DOMContentLoaded", () => {
  openBtn = document.querySelector(".js-card-opener");
  console.log(openBtn);
  openBtn.onclick = (e) => {
    document.body.classList.toggle("open");
    if (document.body.classList.value.includes("open")) {
      audioElement.src = "songs/Birthday.mp3";
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };
});
