//import "./lumslide.css"

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

    this.slider.style.overflow = "hidden"
    this.slider.style.height = "0px"

    this.changeCallback = () => {}

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
    this.slider.append(this.track)
    this.setupSlides()

    this.initializeDragging()
    this.addResizeEventListener()
    this.preventClickOnDrag()
    this.slider.style.height = "auto"
  }

  addResizeEventListener() {
    window.addEventListener("resize", () => {
      this.updateSettingsByBreakpoint()
      this.calculateWidths()
      this.reinitWidths()
      if (this.getCurrentPage() > this.slideAmount - this.slidesPerPage) {
        this.gotoPage(this.slideAmount - this.slidesPerPage)
      }
    })
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
  }

  initializeDragging() {
    this.slider.addEventListener("mousedown", e => {
      this.isDragging = true
      this.track.style.transition = "all 0ms ease-out"
      this.xDragStart = e.pageX
    })

    document.addEventListener("mouseup", () => {
      if (!this.isDragging) {
        return false
      }

      this.track.style.transition = "all 200ms ease-out"
      this.xOffset += this.xDragDelta

      if (this.xOffset > 0) {
        this.gotoPage(0)
      } else if (Math.abs(this.xOffset) + this.slidesPerPage * (this.slideWidth + this.margin * 2) >= this.sliderWidth) {
        this.gotoPage(this.slideAmount - this.slidesPerPage)
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

  setTransform(value) {
    this.track.style.transform = `translate3d(${value}px, 0, 0)`
  }

  setupSlides() {
    for (let i = 0; i < this.slideAmount; i++) {
      const slide = this.slider.children[0]
      slide.classList.add("lumens__slide")
      slide.style.width = this.slideWidth - this.margin * 2 + "px"
      slide.style.margin = "0 " + this.margin + "px"
      this.track.append(slide)
    }
    this.slides = this.track.children
  }

  getData() {
    console.log(this)
  }

  /**
   * Scrolls the slider to a certain page. If page is undefined
   * it will scroll to the nearest page of the current offset.
   * (This is what happens when you release the mouse button while dragging)
   * @param {Number} page The page to which the slider should scroll
   */
  gotoPage(page) {
    page = page === undefined ? this.getCurrentPage() : page

    page = page < 0 ? 0 : page
    page = page > this.slideAmount - this.slidesPerPage ? this.slideAmount - this.slidesPerPage : page
    let offset = page * this.slideWidth * -1
    this.setTransform(offset)
    this.xOffset = offset
    this.currentPage = page
    this.changeCallback()
  }

  /**
   * Will go to the next page
   * @returns {void}
   */
  gotoNext() {
    this.gotoPage(this.currentPage + 1)
  }

  /**
   * Will go to the previous page
   * @returns {void}
   */
  gotoPrev() {
    this.gotoPage(this.currentPage - 1)
  }

  changed(callback) {
    this.changeCallback = callback
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
    this.draggable = true
    this.multipleDrag = true
    this.threshold = 20
    this.loop = false
    this.preventClickDistance = 100
    this.responsive = []
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

    this.track.style.transition = "all 0ms ease-out"
    this.gotoPage()
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
}

export default Lumens
