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

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
})

sr.reveal(".slider__logo_top", { delay: 800 })
sr.reveal(`.slider__logo_middle`, { origin: "bottom" })
sr.reveal(`.slider__logo_bottom`, { delay: 1000, origin: "bottom" })
