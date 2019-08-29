import Lumens from "./lumens"
import "./prism.min"

window.navElements = []
window.navLinks = []
window.addEventListener("load", () => {
  window.navElements = document.querySelectorAll(".navigation-scroll")
  window.navLinks = document.querySelectorAll(".navigation__link")

  for (let i = 0; i < window.navLinks.length; i++) {
    const nav = window.navLinks[i]
    nav.addEventListener("click", () => {
      window.scrollTo(0, window.navElements[i].offsetTop - 20)
    })
  }

  getCurrentSection()
  initSliders()
})

document.addEventListener("scroll", () => {
  getCurrentSection()
})

let getCurrentSection = () => {
  for (let i = window.navElements.length - 1; i >= 0; i--) {
    const nav = window.navElements[i]
    if (nav.offsetTop - 30 < window.scrollY) {
      for (let j = 0; j < window.navLinks.length; j++) {
        const link = window.navLinks[j]
        link.className = "navigation__link"
      }
      window.navLinks[i].className += " navigation__link--active"
      break
    }
  }
}

let initSliders = () => {
  window.defaultslider = new Lumens(".defaultslider")

  window.autoplay = new Lumens(".autoplayslider", {
    autoplay: 2500
  })

  window.preventclick = new Lumens(".productslider", {
    preventClickDistance: 50
  })

  window.responsiveslider = new Lumens(".responsiveslider", {
    slidesPerPage: 2,
    margin: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerPage: 1
        }
      }
    ]
  })

  window.infiniteslider = new Lumens(".infiniteslider", {
    infinite: true
  })

  window.callbackslider = new Lumens(".callbackslider", {
    duration: 1000
  })

  window.callbackslider.beforeChange(() => {
    document.getElementById("callback").innerHTML = "Change started!"
    setTimeout(() => {
      document.getElementById("callback").innerHTML = "&nbsp;"
    }, 300)
  })

  window.callbackslider.afterChange(() => {
    document.getElementById("callback").innerHTML = "Slide Changed!"
    setTimeout(() => {
      document.getElementById("callback").innerHTML = "&nbsp;"
    }, 500)
  })

  window.apislider = new Lumens(".apislider", {
    draggable: false
  })

  window.arrowslider = new Lumens(".arrowslider", {
    arrowControls: true
  })

  document.getElementById("next").addEventListener("click", () => {
    window.apislider.gotoNext()
  })

  document.getElementById("prev").addEventListener("click", () => {
    window.apislider.gotoPrev()
  })
}
