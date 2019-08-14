import Lumens from "./lumens"

window.addEventListener("load", () => {
  window.a = new Lumens(".productslider", {
    slidesPerPage: 4,
    margin: 10,
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

  let slides = document.querySelectorAll(".slide img")
  Array.from(slides).forEach(slide => {
    slide.addEventListener("click", () => {
      window.location.href = "https://placekitten.com"
    })
  })
})