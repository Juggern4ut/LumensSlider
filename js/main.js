import Lumens from "./lumens"

window.addEventListener("load", () => {
  window.a = new Lumens(".productslider", {
    slidesPerPage: 4,
    margin: 10,
    autoplay: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerPage: 2,
          margin: 5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerPage: 1,
          margin: 0
        }
      }
    ]
  })

  document.getElementById("prev").addEventListener("click", () => {
    window.a.gotoPrev()
  })

  document.getElementById("next").addEventListener("click", () => {
    window.a.gotoNext()
  })

  window.a.changed(() => {
    console.log("changed")
  })

  window.a.resize(() => {
    console.log("Breakpoint changed")
  })

  let slides = document.querySelectorAll(".slide img")
  Array.from(slides).forEach(slide => {
    slide.addEventListener("click", () => {
      window.location.href = "https://placekitten.com"
    })
  })
})
