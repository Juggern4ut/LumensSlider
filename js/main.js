import Lumens from "./lumens"
;(function(arr) {
  arr.forEach(function(item) {
    if (item.hasOwnProperty("append")) {
      return
    }
    Object.defineProperty(item, "append", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment()

        argArr.forEach(function(argItem) {
          var isNode = argItem instanceof Node
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
        })

        this.appendChild(docFrag)
      }
    })
  })
})([Element.prototype, Document.prototype, DocumentFragment.prototype])

window.addEventListener("load", () => {
  window.a = new Lumens(
    ".productslider",
    {
      slidesPerPage: 4,
      margin: 10,
      autoplay: 3000,
      noOuterMargin: false,
      showWarnings: true,
      startAtPage: 2,
      draggable: true,
      duration: 300,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesPerPage: 2,
            margin: 5,
            autoplay: 1000
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
    },
    true
  )

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
