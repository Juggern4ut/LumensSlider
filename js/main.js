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

  window.default = new Lumens(".defaultslider")

  window.autoplay = new Lumens(".autoplayslider", {
    autoplay: 2500
  })

  window.a = new Lumens(
    ".productslider",
    {
      slidesPerPage: 2,
      margin: 10,
      draggable: true,
      responsive: [
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

  let slides = document.querySelectorAll(".slide img")
  Array.from(slides).forEach(slide => {
    slide.addEventListener("click", () => {
      window.location.href = "https://placekitten.com"
    })
  })
})
