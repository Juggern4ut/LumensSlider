import Lumens from "./lumens"
import "./prism.min"

//Append Polyfill
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

//Prepend Polyfill
;(function(arr) {
  arr.forEach(function(item) {
    if (item.hasOwnProperty("prepend")) {
      return
    }
    Object.defineProperty(item, "prepend", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment()

        argArr.forEach(function(argItem) {
          var isNode = argItem instanceof Node
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
        })

        this.insertBefore(docFrag, this.firstChild)
      }
    })
  })
})([Element.prototype, Document.prototype, DocumentFragment.prototype])

window.addEventListener("load", () => {
  window.defaultslider = new Lumens(".defaultslider")

  window.autoplay = new Lumens(".autoplayslider", {
    autoplay: 2500
  })

  window.preventclick = new Lumens(".productslider", {
    preventClickDistance: 50
  })

  window.preventclick = new Lumens(".infiniteslider", {
    infinite: true
  })

  window.callbackslider = new Lumens(".callbackslider", {
    slidesPerPage: 1,
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
