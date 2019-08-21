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

    this.calculateWidths()

    //Create and fill track
    this.createAndAddTrack()
    this.enableTransition()
    this.setupSlides()

    this.initializeDragging()
    this.addResizeEventListener()
    this.preventClickOnDrag()
    this.initAutoplay()
    this.initArrowControls()
    this.slider.style.height = "auto"
  }

  /**
   * Creates the track element and formats it correctly
   * @returns {void}
   */
  createAndAddTrack() {
    this.track = document.createElement("div")
    this.track.className = "lumens__track"
    this.track.style.width = this.sliderWidth + "px"
    this.track.style.overflow = "hidden"
    this.setTransform(this.startAtPage * this.slideWidth * -1)
    this.xOffset = this.startAtPage * this.slideWidth * -1
    this.currentPage = this.startAtPage
    this.slider.append(this.track)
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
      this.resizeCallback()
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
      if (!this.draggable) {
        this.warn("Dragging is disabled")
        return false
      }

      if (e.button !== this.mouseButton && this.mouseButton !== false) {
        this.warn("Dragging is not possible with this mouse-button")
        return false
      }

      //e.preventDefault()
      clearInterval(this.autoplayFunction)
      this.isDragging = true
      this.disableTransition()
      this.xDragStart = e.type === "touchstart" ? e.touches[0].pageX : e.pageX
    }

    var mouseUp = e => {
      if (!this.isDragging) {
        return false
      }

      this.enableTransition()
      this.xOffset += this.xDragDelta

      if (this.xDragDelta <= this.threshold * -1 && this.xOffset > (this.sliderWidth - this.slidesPerPage * this.slideWidth) * -1) {
        this.gotoNext()
      } else if (this.xDragDelta >= this.threshold && this.xOffset < 0) {
        this.gotoPrev()
      } else {
        this.gotoPage()
      }

      this.initAutoplay()
      this.isDragging = false
    }

    var mouseMove = e => {
      if (!this.isDragging) {
        return false
      }
      
      e.preventDefault()

      var tmp = e.type === "touchmove" ? e.touches[0].pageX : e.pageX

      this.xDragDelta = tmp - this.xDragStart
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

  /**
   * Will configure the initial state of the slides
   * and place them inside the track-element.
   * @returns {void}
   */
  setupSlides() {
    var loopLength = this.infinite ? this.slideAmount - 2 * this.slidesPerPage : this.slideAmount
    for (let i = 0; i < loopLength; i++) {
      const slide = this.slider.children[0]
      slide.className += " lumens__slide"
      slide.style.width = this.slideWidth - this.margin * 2 + "px"
      slide.style.margin = "0 " + this.margin + "px"
      slide.style.float = "left"
      this.track.append(slide)
    }

    //CLONES
    if (this.infinite) {
      for (let i = 0; i < this.slidesPerPage; i++) {
        this.track.prepend(this.track.children[this.track.children.length - 1 - i].cloneNode(true))
      }

      for (let i = 0; i < this.slidesPerPage; i++) {
        this.track.append(this.track.children[i + this.slidesPerPage].cloneNode(true))
      }
    }

    this.slides = this.track.children
    this.slideAmount = this.track.children.length
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
    let offset = page * this.slideWidth * -1
    this.setTransform(offset)
    this.xOffset = offset
    this.currentPage = page
    if (triggerChange) {
      this.changeCallback()

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
   * Sets the callback for changing slides
   * @param {function} callback Will be called when the slides change
   */
  changed(callback) {
    this.changeCallback = callback
  }

  /**
   * Sets the callback for changing breakpoints
   * @param {function} callback This will be called, when another breakpoint is reached
   */
  resize(callback) {
    this.resizeCallback = callback
  }

  /**
   * Returns the current page according to the offset.
   * @returns {Number} The current page the slider is on
   */
  getCurrentPage() {
    if (this.xOffset > 0) {
      return 0
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
    this.startIndex = 0
    this.autoplay = false
    this.autoplayFunction = undefined
    this.draggable = true
    this.threshold = 20
    this.loop = false
    this.arrowControls = false
    this.mouseButton = false
    this.preventClickDistance = 50
    this.responsive = []
    this.noOuterMargin = false
    this.startAtPage = 0
    this.infinite = false
    this.changeCallback = () => {}
    this.resizeCallback = () => {}

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
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        this[key] = options[key]
      }
    }
  }

  /**
   * Calculates the widths of Slides, Track and Container
   * used on first init and resizing
   * @returns {void}
   */
  calculateWidths() {
    this.sliderPadding = parseInt(window.getComputedStyle(this.slider, null).getPropertyValue("padding-left"))
    this.sliderVisibleWidth = this.slider.offsetWidth - this.sliderPadding * 2
    this.slideWidth = this.sliderVisibleWidth / this.slidesPerPage
    this.sliderWidth = this.slideWidth * this.slideAmount

    if (this.noOuterMargin) {
      this.sliderVisibleWidth += this.margin * 2
      this.slider.style.position = "relative"
      this.slider.style.right = this.margin + "px"
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
        e.preventDefault()
        this.xDragDelta = 0
      }
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
   * warning messages are enabled manually.
   * @param {String} warning The message the user should be warned about
   * @returns {void}
   */
  warn(warning) {
    if (this.showWarnings) {
      console.warn("Lumens: " + warning)
    }
  }
}
