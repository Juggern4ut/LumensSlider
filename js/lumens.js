class Lumens {
  constructor(selector, options) {
    this.slider = document.querySelector(selector)

    //Prevent JS from breaking if there is no element found with the given selector
    if (!this.slider) {
      console.warn("Lumens: No element found using the given selector: " + selector)
      return false
    }

    this.slideAmount = this.slider.children.length

    //OPTIONS
    this.setDefaultSettings()
    this.updateSettings(options)
    this.initialSettings = options
    this.currentBreakpointIndex = undefined
    this.oldBreakpointIndex = undefined
    this.updateSettingsByBreakpoint()

    this.slider.style.overflow = "hidden"
    this.slider.style.height = "0px"

    //CALCULATIONS
    this.calculateWidths()

    this.isDragging = false
    this.xDragStart = 0
    this.xDragDelta = 0
    this.xOffset = 0
    this.currentPage = 0

    //Create and fill track
    this.track = document.createElement("div")
    this.track.className = "lumens__track"
    this.track.style.width = this.sliderWidth + "px"
    this.track.style.overflow = "hidden"
    this.track.style.transform = "translate3d(0, 0, 0)"
    this.enableTransition()
    this.slider.append(this.track)
    this.setupSlides()

    this.initializeDragging()
    this.addResizeEventListener()
    this.preventClickOnDrag()
    this.initAutoplay()
    this.slider.style.height = "auto"
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
      var page = this.currentPage + 1 > this.slideAmount - this.slidesPerPage ? 0 : this.currentPage + 1
      this.enableTransition()
      this.gotoPage(page)
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

    if (this.currentBreakpointIndex != this.oldBreakpointIndex) {
      this.oldBreakpointIndex = this.currentBreakpointIndex
      this.resizeCallback()
    }

    if (this.currentBreakpointIndex !== undefined) {
      this.updateSettings(this.initialSettings)
      this.updateSettings(this.responsive[this.currentBreakpointIndex].settings)
    } else {
      this.updateSettings(this.initialSettings)
    }
  }

  /**
   * Initializes the events that allow the user
   * to drag the carousel to change slides.
   * @returns {void}
   */
  initializeDragging() {
    this.slider.addEventListener("mousedown", e => {
      this.isDragging = true
      this.track.style.transition = `all 0ms ${this.easing}`
      this.xDragStart = e.pageX
    })

    document.addEventListener("mouseup", () => {
      if (!this.isDragging) {
        return false
      }

      this.enableTransition()
      this.xOffset += this.xDragDelta

      var currentPage = this.currentPage

      if (this.xOffset > 0) {
        var changing = currentPage != 0
        this.gotoPage(0, changing)
      } else if (Math.abs(this.xOffset) + this.slidesPerPage * (this.slideWidth + this.margin * 2) >= this.sliderWidth) {
        var changing = currentPage < this.slideAmount - this.slidesPerPage
        this.gotoPage(this.slideAmount - this.slidesPerPage, changing)
      } else {
        this.gotoPage()
      }

      this.isDragging = false
    })

    document.addEventListener("mousemove", e => {
      e.preventDefault()
      if (!this.isDragging) {
        return false
      }

      this.xDragDelta = e.pageX - this.xDragStart
      this.setTransform(this.xOffset + this.xDragDelta)
    })
  }

  /**
   * Sets the translate3d-rule for the track to the given amount
   * @param {number} value The amount in Pixel the transfrom should be set
   */
  setTransform(value) {
    this.track.style.transform = `translate3d(${value}px, 0, 0)`
  }

  /**
   * Will configure the initial state of the slides
   * and place them inside the track-element.
   * @returns {void}
   */
  setupSlides() {
    for (let i = 0; i < this.slideAmount; i++) {
      const slide = this.slider.children[0]
      slide.classList.add("lumens__slide")
      slide.style.width = this.slideWidth - this.margin * 2 + "px"
      slide.style.margin = "0 " + this.margin + "px"
      slide.style.float = "left"
      this.track.append(slide)
    }
    this.slides = this.track.children
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

    if (page < 0 || page > this.slideAmount - this.slidesPerPage) {
      triggerChange = false
    }

    page = page < 0 ? 0 : page
    page = page > this.slideAmount - this.slidesPerPage ? this.slideAmount - this.slidesPerPage : page
    let offset = page * this.slideWidth * -1
    this.setTransform(offset)
    this.xOffset = offset
    this.currentPage = page
    if (triggerChange) {
      this.changeCallback()
    }
  }

  /**
   * Will go to the next page
   * @returns {void}
   */
  gotoNext() {
    this.enableTransition()
    this.gotoPage(this.currentPage + 1)
  }

  /**
   * Will go to the previous page
   * @returns {void}
   */
  gotoPrev() {
    this.enableTransition()
    this.gotoPage(this.currentPage - 1)
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
    this.multipleDrag = true
    this.threshold = 20
    this.loop = false
    this.preventClickDistance = 100
    this.responsive = []
    this.changeCallback = () => {}
    this.resizeCallback = () => {}
  }

  /**
   * Sets default settings and overrites it with custom ones.
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
    this.sliderVisibleWidth = this.slider.offsetWidth
    this.slideWidth = this.sliderVisibleWidth / this.slidesPerPage
    this.sliderWidth = this.slideWidth * this.slideAmount
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
    document.addEventListener(
      "click",
      e => {
        if (Math.abs(this.xDragDelta) > this.preventClickDistance) {
          e.stopPropagation()
          e.preventDefault()
          this.xDragDelta = 0
        }
      },
      true
    )
  }

  /**
   * Enables the transition on the track-element
   * @returns {void}
   */
  enableTransition() {
    this.track.style.transition = `all ${this.duration}ms ${this.easing}`
  }

  /**
   * Disables the transition on the track-element
   * @returns {void}
   */
  disableTransition() {
    this.track.style.transition = `all 0ms ${this.easing}`
  }
}

export default Lumens
