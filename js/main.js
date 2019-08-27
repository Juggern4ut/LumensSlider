import Lumens from "./lumens"
import "./prism.min"

window.addEventListener("load", () => {

  window.defaultslider = new Lumens(".defaultslider")

  window.autoplay = new Lumens(".autoplayslider", {
    autoplay: 2500
  })

  window.preventclick = new Lumens(".productslider", {
    preventClickDistance: 50,
    dotNavigation: true
  })

  window.preventclick = new Lumens(".infiniteslider", {
    infinite: true
  })

  window.callbackslider = new Lumens(".callbackslider", {
    slidesPerPage: 2,
    noOuterMargin: true,
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

  window.callbackslider.changed(() => {
    document.getElementById("callback").innerHTML = "Slide Changed!"
    setTimeout(() => {
      document.getElementById("callback").innerHTML = "&nbsp;"
    }, 500)
  })

  window.callbackslider.resize(() => {
    document.getElementById("callback").innerHTML = "New Breakpoint reached"
    setTimeout(() => {
      document.getElementById("callback").innerHTML = "&nbsp;"
    }, 1000)
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
})
