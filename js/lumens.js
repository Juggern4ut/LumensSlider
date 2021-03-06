/** Class representing a Lumens slideshow */
export default class Lumens {
  constructor(selector, options, showWarnings) {
    this.showWarnings = showWarnings
    this.slider = typeof selector === "string" ? document.querySelector(selector) : selector

    //Prevent JS from breaking if there is no element found with the given selector
    if (!this.slider) {
      this.warn("No element found using the given selector: " + selector)
      return false
    }

    //OPTIONS
    this.setDefaultSettings()
    this.updateSettings(options)

    if (this.infinite) {
      this.startAtPage += this.slidesPerPage
    }

    this.initialSettings = options
    this.currentBreakpointIndex = undefined
    this.oldBreakpointIndex = undefined
    this.updateSettingsByBreakpoint()

    this.slider.style.overflow = "hidden"
    this.slider.style.height = "0px"

    //CALCULATIONS

    this.slideAmount = this.infinite ? this.slider.children.length + 2 * this.slidesPerPage : this.slider.children.length

    this.createDomElements()

    this.calculateWidths()

    //Create and fill track
    this.setupTrack()
    this.setupSlides()

    this.createAndAddDotNavigation()

    this.initializeDragging()
    this.addResizeEventListener()
    this.preventClickOnDrag()
    this.initAutoplay()
    this.initArrowControls()
    this.activateDot()
    this.slider.style.height = "auto"
  }

  /**
   * Creates the DOM for the Track and all the slides (Widths and styling are not yet set)
   * @returns {void}
   */
  createDomElements() {
    this.track = document.createElement("div")
    this.track.className = "lumens__track"
    this.currentPage = this.startAtPage
    this.slider.append(this.track)

    var loopLength = this.infinite ? this.slideAmount - 2 * this.slidesPerPage : this.slideAmount
    for (let i = 0; i < loopLength; i++) {
      const slide = this.slider.children[0]
      slide.className += " lumens__slide"
      this.track.append(slide)
    }

    if (this.infinite) {
      for (let i = 0; i < this.slidesPerPage; i++) {
        var newNode = this.track.children[this.track.children.length - 1 - i].cloneNode(true)
        newNode.className += " lumens__slide--clone"
        this.track.prepend(newNode)
      }

      for (let i = 0; i < this.slidesPerPage; i++) {
        var newNode = this.track.children[i + this.slidesPerPage].cloneNode(true)
        newNode.className += " lumens__slide--clone"
        this.track.append(newNode)
      }
    }

    this.slides = this.track.children
    this.slideAmount = this.track.children.length
  }

  /**
   * Sets the Track-Element up
   * @returns {void}
   */
  setupTrack() {
    this.track.style.width = this.sliderWidth + "px"
    this.track.style.overflow = "hidden"
    this.currentPage = this.startAtPage
    this.disableTransition()
    if (this.keepSlideSize) {
      this.xOffset = 0
      for (let i = 0; i < this.startAtPage; i++) {
        const slide = this.slides[i]
        this.xOffset += slide.offsetWidth + this.margin * 2
      }
    } else {
      this.xOffset = this.startAtPage * this.slideWidth * -1
    }
    this.setTransform(this.xOffset)
  }

  /**
   * Will configure the initial state of the slides
   * @returns {void}
   */
  setupSlides() {
    for (let i = 0; i < this.slides.length; i++) {
      const slide = this.slides[i]
      slide.style.width = this.slideWidth - this.margin * 2 + "px"
      slide.style.margin = "0 " + this.margin + "px"
      slide.style.float = "left"
    }
  }

  /**
   * Creates the dotnavigation and adds it after the track element.
   * This will also handle the click event for the single dots.
   * @returns {void}
   */
  createAndAddDotNavigation() {
    if (this.dotNavigation) {
      this.dotnav = document.createElement("div")
      this.dotnav.className = "lumens__dot-nav"

      if (!this.dotnavStyling.ownStyle) {
        this.dotnav.style.margin = "0 auto"
        this.dotnav.style.textAlign = "center"
      }

      this.dotamount = this.infinite ? Math.ceil((this.slideAmount - this.slidesPerPage * 2) / this.slidesPerPage) : Math.ceil(this.slideAmount / this.slidesPerPage)
      this.track.after(this.dotnav)
      for (let i = 0; i < this.dotamount; i++) {
        let dot = document.createElement("div")
        dot.className = this.dotnavStyling.className
        if (!this.dotnavStyling.ownStyle) {
          dot.style.width = this.dotnavStyling.size + "px"
          dot.style.height = this.dotnavStyling.size + "px"
          dot.style.borderRadius = this.dotnavStyling.borderRadius
          dot.style.display = "inline-block"
          dot.style.margin = "0 " + this.dotnavStyling.margin + "px"
          dot.style.border = this.dotnavStyling.border
        }

        this.dotnav.append(dot)
        dot.addEventListener("click", () => {
          if (this.infinite) {
            this.gotoPage((i + 1) * this.slidesPerPage)
          } else {
            this.gotoPage(i * this.slidesPerPage)
          }
        })
      }
    }
  }

  /**
   * Will calculate the currently active dot and add a new classname to it.
   * Will then (if custom styling is not turned on) style the in-/active dots
   * @returns {void}
   */
  activateDot() {
    if (this.dotNavigation) {
      let dotIndex = this.infinite ? Math.floor(this.currentPage / this.slidesPerPage) - 1 : Math.floor(this.currentPage / this.slidesPerPage)
      this.dotnav.querySelectorAll("." + this.dotnavStyling.className).forEach((tmp, index) => {
        if (this.currentPage + this.slidesPerPage == this.slideAmount && !Number.isInteger(this.currentPage / this.slidesPerPage)) {
          index--
        }
        tmp.className = index === dotIndex ? this.dotnavStyling.className + " " + this.dotnavStyling.className + "--active" : this.dotnavStyling.className
      })

      if (!this.dotnavStyling.ownStyle) {
        document.querySelectorAll("." + this.dotnavStyling.className).forEach(tmp => {
          if (tmp.className.includes(this.dotnavStyling.className + "--active")) {
            tmp.style.backgroundColor = this.dotnavStyling.activeColor
          } else {
            tmp.style.backgroundColor = this.dotnavStyling.inactiveColor
          }
        })
      }
    }
  }

  /**
   * Will set the resize event listener and set the
   * widths for all elements again
   * @returns {void}
   */
  addResizeEventListener() {
    window.addEventListener("resize", () => {
      this.updateSettingsByBreakpoint()
      this.calculateWidths()
      this.reinitWidths()
      if (this.getCurrentPage() > this.slideAmount - this.slidesPerPage) {
        this.gotoPage(this.slideAmount - this.slidesPerPage, false)
      }
    })
  }

  /**
   * Initializes an autoplay depending on the settings
   * @returns {void}
   */
  initAutoplay() {
    clearInterval(this.autoplayFunction)
    this.autoplayFunction = undefined

    if (!this.autoplay) {
      return false
    }

    this.autoplayFunction = setInterval(() => {
      this.enableTransition()
      this.gotoNext()
    }, this.autoplay)
  }

  /**
   * Will check for breakpoints set in the settings
   * and update the settings accordingly
   * @returns {void}
   */
  updateSettingsByBreakpoint() {
    this.currentBreakpointIndex = undefined
    for (let i = 0; i < this.responsive.length; i++) {
      const breakpoint = this.responsive[i]
      if (window.innerWidth < breakpoint.breakpoint) {
        this.currentBreakpointIndex = i
      }
    }

    if (this.currentBreakpointIndex !== undefined) {
      this.updateSettings(this.initialSettings)
      this.updateSettings(this.responsive[this.currentBreakpointIndex].settings)
    } else {
      this.updateSettings(this.initialSettings)
    }

    if (this.currentBreakpointIndex != this.oldBreakpointIndex) {
      this.oldBreakpointIndex = this.currentBreakpointIndex
      this.changeBreakpoint()
      this.initAutoplay()
    }
  }

  /**
   * Initializes the events that allow the user
   * to drag the carousel to change slides.
   * @returns {void}
   */
  initializeDragging() {
    var mouseDown = e => {
      this.startTime = Date.now()
      if (!this.draggable) {
        this.warn("Dragging is disabled")
        return false
      }

      if (e.type !== "touchstart" && e.button !== this.mouseButton && this.mouseButton !== false) {
        this.warn("Dragging is not possible with this mouse-button")
        return false
      }

      if (e.type !== "touchstart") {
        e.preventDefault()
      }

      clearInterval(this.autoplayFunction)
      this.isDragging = true
      this.disableTransition()
      this.xDragStart = e.type === "touchstart" ? e.touches[0].pageX : e.pageX
      this.beforeDraggingCallback()
    }

    var mouseUp = e => {
      if (!this.isDragging) {
        return false
      }

      this.enableTransition()
      this.xOffset += this.xDragDelta

      this.scrollForce = 300 - (Date.now() - this.startTime)

      if (!this.freeScroll) {
        if ((this.xDragDelta < this.slideWidth * -1 || this.xDragDelta > this.slideWidth) && !this.keepSlideSize) {
          this.gotoPage()
        } else if (this.xDragDelta <= this.threshold * -1 && this.xOffset * -1 < this.sliderWidth - this.sliderVisibleWidth) {
          this.gotoNext()
        } else if (this.xDragDelta >= this.threshold && this.xOffset < 0) {
          this.gotoPrev()
        } else {
          this.gotoPage()
        }
      } else {

        if (this.scrollForce > 0 && Math.abs(this.xDragDelta > this.threshold)) {
          if (this.xDragDelta < 0) {
            this.xOffset -= this.scrollForce
          } else {
            this.xOffset += this.scrollForce
          }
          this.setTransform(this.xOffset)
        }

        if (this.xOffset > 0) {
          this.xOffset = 0
          this.setTransform(this.xOffset)
        } else if (this.xOffset * -1 > this.sliderWidth - this.sliderVisibleWidth) {
          this.xOffset = (this.sliderWidth - this.sliderVisibleWidth) * -1
          this.setTransform(this.xOffset)
        }
      }

      this.initAutoplay()
      this.isDragging = false
      this.afterDraggingCallback()
    }

    var mouseMove = e => {
      if (!this.isDragging) {
        return false
      }

      if (e.type !== "touchmove") {
        e.preventDefault()
      }

      var tmp = e.type === "touchmove" ? e.touches[0].pageX : e.pageX

      this.xDragDelta = tmp - this.xDragStart
      this.draggingCallback()
      this.setTransform(this.xOffset + this.xDragDelta)
    }

    this.slider.addEventListener("mousedown", mouseDown)
    this.slider.addEventListener("touchstart", mouseDown)

    document.addEventListener("mouseup", mouseUp)
    document.addEventListener("touchend", mouseUp)

    document.addEventListener("mousemove", mouseMove)
    document.addEventListener("touchmove", mouseMove, { passive: false })
  }

  /**
   * Sets the translate3d-rule for the track to the given amount
   * @param {number} value The amount in Pixel the transfrom should be set
   * @returns {void}
   */
  setTransform(value) {
    this.track.style.msTransform = `translate(${value}px, 0)`
    this.track.style.webkitTransform = `translate(${value}px, 0)`
    this.track.style.MozTransform = `translate(${value}px, 0)`
    this.track.style.OTransform = `translate(${value}px, 0)`
    this.track.style.transform = `translate(${value}px, 0)`
  }

  getExactSlideWidth(slide){
    const compStyle = window.getComputedStyle(slide, null);
    const width = parseFloat(compStyle.getPropertyValue("width"));
    return width;
  }

  /**
   * Scrolls the slider to a certain page. If page is undefined
   * it will scroll to the nearest page of the current offset.
   * (This is what happens when you release the mouse button while dragging)
   * @param {Number} page The page to which the slider should scroll
   * @param {Boolean} triggerChange If set to false, the change-callback will not be called
   */
  gotoPage(page, triggerChange) {
    triggerChange = triggerChange === undefined ? true : triggerChange
    page = page === undefined ? this.getCurrentPage() : page

    if (page < 0 || page > this.slideAmount - this.slidesPerPage || this.currentPage == page) {
      triggerChange = false
    }

    page = page > this.slideAmount - this.slidesPerPage ? this.slideAmount - this.slidesPerPage : page
    page = page < 0 ? 0 : page

    let offset = 0
    if (this.keepSlideSize) {
      for (let i = 0; i < page; i++) {
        offset += this.slides[i].offsetWidth + this.margin * 2
      }

      offset = offset * -1
    } else {
      offset = page * (this.getExactSlideWidth(this.slides[page]) + this.margin * 2) * -1
    }

    this.setTransform(offset)
    this.xOffset = offset
    this.currentPage = page

    if (triggerChange) {
      this.beforeChangeCallback()
      setTimeout(() => {
        this.afterChangeCallback()
      }, this.duration)

      if (this.infinite) {
        if (this.currentPage === 0) {
          setTimeout(() => {
            this.disableTransition()
            this.gotoPage(this.slideAmount - this.slidesPerPage * 2)
          }, this.duration)
        }

        if (this.currentPage >= this.slideAmount - this.slidesPerPage) {
          setTimeout(() => {
            this.disableTransition()
            this.gotoPage(this.slidesPerPage)
          }, this.duration)
        }
      }
    }

    if (this.dotNavigation) {
      this.activateDot()
    }
  }

  /**
   * Will go to the next page
   * @returns {void}
   */
  gotoNext() {
    this.enableTransition()
    let page = this.currentPage >= this.slideAmount - this.slidesPerPage ? 0 : this.currentPage + 1
    this.gotoPage(page)
  }

  /**
   * Will go to the previous page
   * @returns {void}
   */
  gotoPrev() {
    this.enableTransition()
    let page = this.currentPage <= 0 ? this.slideAmount : this.currentPage - 1
    this.gotoPage(page)
  }

  /**
   * Sets the callback called before changing slides
   * @param {function} callback Will be called before the slides change
   */
  beforeChange(callback) {
    this.beforeChangeCallback = callback
  }

  /**
   * Sets the callback called after changing slides
   * @param {function} callback Will be called after the slides have changed
   */
  afterChange(callback) {
    this.afterChangeCallback = callback
  }

  /**
   * Sets the callback for changing breakpoints
   * @param {function} callback This will be called, when another breakpoint is reached
   */
  changeBreakpoint(callback) {
    this.changeBreakpoint = callback
  }

  /**
   * Sets the callback for starting dragging the slideshow
   * @param {function} callback This will be called, when the user began to drag the slideshow
   */
  beforeDragging(callback) {
    this.beforeDraggingCallback = callback
  }

  /**
   * Sets the callback for dragging the slideshow
   * @param {function} callback This will be called, when the slideshow is dragged
   */
  dragging(callback) {
    this.draggingCallback = callback
  }

  /**
   * Sets the callback for ending dragging the slideshow
   * @param {function} callback This will be called, when the user stops to drag the slideshow
   */
  afterDragging(callback) {
    this.afterDraggingCallback = callback
  }

  /**
   * Returns the current page according to the offset.
   * @returns {Number} The current page the slider is on
   */
  getCurrentPage() {
    if (this.xOffset > 0 && !this.keepSlideSize) {
      return 0
    }

    if (this.keepSlideSize) {
      if (this.xOffset * -1 + this.sliderVisibleWidth >= this.sliderWidth) {
        this.xOffset = (this.sliderWidth - this.sliderVisibleWidth - 10) * -1
      }

      let closestDiff = 0
      let closestSlide = 0
      for (let i = 0; i < this.slides.length; i++) {
        const diff = this.slides[i].offsetLeft + this.xOffset
        if (closestDiff === 0) {
          closestDiff = diff
          closestSlide = i
        } else if (diff > 0 && diff <= Math.abs(closestDiff)) {
          closestDiff = diff
          closestSlide = i
        } else if (diff < 0 && -diff < Math.abs(closestDiff)) {
          closestDiff = diff
          closestSlide = i
        }
      }
      return closestSlide
    }

    return Math.abs(Math.round(this.xOffset / this.slideWidth))
  }

  /**
   * Sets the settings to the default values. This is called
   * on initialisation and can be used to reset all settings.
   * @returns {void}
   */
  setDefaultSettings() {
    this.slidesPerPage = 1
    this.margin = 0
    this.duration = 200
    this.easing = "ease-out"
    this.autoplay = false
    this.autoplayFunction = undefined
    this.draggable = true
    this.threshold = 20
    this.arrowControls = false
    this.mouseButton = false
    this.preventClickDistance = 20
    this.responsive = []
    this.noOuterMargin = false
    this.startAtPage = 0
    this.infinite = false
    this.keepSlideSize = false
    this.freeScroll = false

    this.afterChangeCallback = () => {}
    this.beforeChangeCallback = () => {}
    this.changeBreakpoint = () => {}
    this.afterDraggingCallback = () => {}
    this.draggingCallback = () => {}
    this.beforeDraggingCallback = () => {}

    this.dotNavigation = false
    this.dotnavStyling = {
      ownStyle: false,
      className: "lumens__dot",
      size: 10,
      border: "1px solid #999",
      margin: 10,
      activeColor: "#fff",
      inactiveColor: "transparent",
      borderRadius: "50%"
    }

    this.isDragging = false
    this.xDragStart = 0
    this.xDragDelta = 0
    this.xOffset = 0
    this.currentPage = 0
  }

  /**
   * Gives the slideshow the ability to be controlled
   * by using the left and right arrow-keys, if enabled.
   * @returns {void}
   */
  initArrowControls() {
    if (!this.arrowControls) {
      return false
    }

    document.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft" || event.key === "Left") {
        this.gotoPrev()
      } else if (event.key === "ArrowRight" || event.key === "Right") {
        this.gotoNext()
      }
    })
  }

  /**
   * Overrites default settings with custom ones.
   * @param {Object} options - Optional settings object.
   * @returns {void}
   */
  updateSettings(options) {
    if (options && options.slidesPerPage && !Number.isInteger(options.slidesPerPage)) {
      this.warn(`Option 'slidesPerPage' has to be a whole number. The given ${options.slidesPerPage} was rounded to ${Math.round(options.slidesPerPage)}`)
      if (options.slidesPerPage) {
        options.slidesPerPage = Math.round(options.slidesPerPage)
      }
    }

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        if (typeof options[key] === "object") {
          var suboptions = options[key]
          for (var subkey in suboptions) {
            if (suboptions.hasOwnProperty(subkey)) {
              this[key][subkey] = suboptions[subkey]
            }
          }
        } else {
          this[key] = options[key]
        }
      }
    }
  }

  /**
   * Calculates the widths of Slides, Track and Container
   * used on first init and resizing
   * @returns {void}
   */
  calculateWidths() {
    this.sliderPaddingLeft = parseInt(window.getComputedStyle(this.slider, null).getPropertyValue("padding-left"))
    this.sliderPaddingRight = parseInt(window.getComputedStyle(this.slider, null).getPropertyValue("padding-right"))
    this.sliderBorderLeft = parseInt(window.getComputedStyle(this.slider, null).getPropertyValue("border-left-width"))
    this.sliderBorderRight = parseInt(window.getComputedStyle(this.slider, null).getPropertyValue("border-right-width"))
    this.sliderVisibleWidth = this.slider.offsetWidth - (this.sliderPaddingLeft + this.sliderPaddingRight + this.sliderBorderLeft + this.sliderBorderRight)

    if (this.keepSlideSize) {
      this.sliderWidth = 0
      Array.from(this.slides).forEach(slide => {
        this.sliderWidth += slide.offsetWidth + this.margin * 2
      })
    } else {
      this.slideWidth = this.sliderVisibleWidth / this.slidesPerPage
      this.sliderWidth = this.slideWidth * this.slideAmount
    }
  }

  /**
   * Recalculates the width of slides and track and sets
   * them again. This is used after changing the settings
   * or resizing for example.
   * @returns {void}
   */
  reinitWidths() {
    this.calculateWidths()
    this.track.style.width = this.sliderWidth + "px"

    Array.from(this.slides).forEach(slide => {
      slide.style.width = this.slideWidth - this.margin * 2 + "px"
      slide.style.margin = `0 ${this.margin}px`
    })

    this.disableTransition()
    this.gotoPage(undefined, false)
  }

  /**
   * Makes sure all click events on slides are being
   * prevented if the user is dragging the carousel
   * @returns {void}
   */
  preventClickOnDrag() {
    var triggerClick = e => {
      if (Math.abs(this.xDragDelta) > this.preventClickDistance) {
        e.stopPropagation()
        if (e.type !== "touchend") {
          e.preventDefault()
        }
      }
      this.xDragDelta = 0
    }

    document.addEventListener("click", triggerClick, true)
    document.addEventListener("touchend", triggerClick)
  }

  /**
   * Enables the transition on the track-element
   * @returns {void}
   */
  enableTransition() {
    this.track.style.msTransition = `all ${this.duration}ms ${this.easing}`
    this.track.style.webkitTransition = `all ${this.duration}ms ${this.easing}`
    this.track.style.MozTransition = `all ${this.duration}ms ${this.easing}`
    this.track.style.OTransition = `all ${this.duration}ms ${this.easing}`
    this.track.style.transition = `all ${this.duration}ms ${this.easing}`
  }

  /**
   * Disables the transition on the track-element
   * @returns {void}
   */
  disableTransition() {
    this.track.style.msTransition = `all 0ms ${this.easing}`
    this.track.style.webkitTransition = `all 0ms ${this.easing}`
    this.track.style.MozTransition = `all 0ms ${this.easing}`
    this.track.style.OTransition = `all 0ms ${this.easing}`
    this.track.style.transition = `all 0ms ${this.easing}`
  }

  /**
   * Will output a warning in the console as long as
   * warning messages are enabled in the constructor.
   * @param {String} warning The message the user should be warned about
   * @returns {void}
   */
  warn(warning) {
    if (this.showWarnings) {
      console.warn("Lumens: " + warning)
    }
  }
}

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
