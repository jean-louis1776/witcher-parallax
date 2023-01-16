new Swiper(".slider", {
  speed: 2400,
  parallax: true,
  spaceBetween: 18,
  mousewheel: {
    enabled: true,
    sensitivity: 2.4,
  },
})

// Audio

let soundButton = document.querySelector(".soundbutton"),
  audio = document.querySelector(".audio")

soundButton.addEventListener("click", (e) => {
  soundButton.classList.toggle("paused")
  audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
  soundButton.classList.contains("paused") ? audio.pause() : audio.play()
}
