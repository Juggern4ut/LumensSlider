# Lumens.js

Tiny vanilla JavaScript carousel

## Description

Lumens is a lightweight JavaScript slideshow which works without any dependencies like JQuery or other bloated libraries. It doesn't rely on a own CSS so you have nothing messing with your personal styling.

Lumens was built for developers. It doesn't add any navigation or pagination but gives you all the tools to add them yourself. This way you have full control over what happens, and when it does so.

## Installation
### Download and include
Installing Lumens is as easy as it gets. Just download the compiled javascript here

Now import the script in the head of your HTML like usual.

`<script src="path/to/lumens.js"></script>`

### CDN
If you prefer to use a CDN you can use the following link. Make sure to add the version if you don't want to update automatically. (Strongly recommended)

`https://cdn.jsdelivr.net/gh/juggern4ut/lumens/dist/lumens.js`

## Usage

### HTML

After installing Lumens, all you have to do for the markup, is create a html-element and add a child for each slide you'll need in your Slider.

```html
<div id="myLumens">
	<div>Slide 1</div>
	<div>Slide 2</div>
	<div>Slide 3</div>
	<div>Slide 4</div>
</div>
```

### JavaScript

Now just create a new Lumens Object and you're all set.

`new Lumens({String, Node} selector, [{Object} options], [{Boolean} showWarnings])`

The constructor takes 3 arguments, of which the second and third one are optional. Here they are listed and documented:

___

`selector {String, Node}`

A String to select the element which should be turned into a Lumens-Slider. This can also be a single node. (Nodelists are not allowed yet and will not intialize the slider)

___

`options {Object}`

Optional object containing all the options the slider should handle. If you don't pass this argument, all the default-settings will be used.

___

`showWarnings {Boolean}`

If this argument is set to true, the slider will throw warnings in the console to help you understand why things might not work as expected.

### Example

```JavaScript
new Lumens("#myLumens", {
	//OPTIONS
	slidesPerPage: 2,
	autoplay: 1000
}, true)
```

## Compability

Since there are a brazillion possible combinations on devices, operating systems, browsers and versions, Lumens tries to be as compatible as possible with all of them. It uses very basic vanilla JavaScript that even Internet Explorer 9 can handle. (Amazing, I know).

Lumens supports the most commen Browsers which include:

- Google Chrome
- Mozilla Firefox
- Opera
- Apple Safari
- Microsoft Edge
- Microsoft Internet Explorer (version 9 and above)
- Samsung Internet

For a detailed list, you can check out [this Sheet](https://docs.google.com/spreadsheets/d/1eUDNPch8Y_K6fcRfYqEpRuqZ_FaKXpu3oJ_yJf77-lw/edit?usp=sharing) containing all the tests Lumens went through

## Features

- Easy to use. Just import the class and create a new JS-Object
- Tiny. Make sure you have a mangnifying glass or you might miss it all together.
- Responsive. Doesn't really need an explenation now does it?
- Configurable. Who would have thought...
- Callbacks. Do stuff when stuff was done.
- Prevents click-event on drag. You think that should be a default, but sadly, it's really not.

### Support

Lumens supports all the modern Browsers. It even works with IE9 but has drawbacks on the sliding-animation.

Following Browsers work:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Microsoft Edge Chromium Engine
- Opera
- Internet Explorer >= Version 9
- Safari

You can find a google sheet with all the test-cases [here](https://docs.google.com/spreadsheets/d/1eUDNPch8Y_K6fcRfYqEpRuqZ_FaKXpu3oJ_yJf77-lw/edit?usp=sharing)

## Options

Like every slideshow ever in the existence of the internet, Lumens also comes with a bunch of options you can set (if you feel like it).

`slidesPerPage (number = 1)`

Defines how much slides are shown per page. If this is not a whole number, it will be rounded. Enable warnings to get notified about this happening.

`margin (number = 0)`

Defines how much margin each slide should have on the left and right.

`duration (number = 200)`

Defines how fast the animation to switch slides will take in milliseconds.

`easing (String = "ease-out")`

The easing function used for transitions.

`autoplay ({Boolean, Number} = false)`

If set to a number will start an interval in set milliseconds until the slider goes to the next slide.

`draggable (Boolean = true)`

If this is set to false, the slide will no longer be draggable by mouse or touch

`threshold (Number = 20)`

Minimum dragging-distance in pixels to change slide

`arrowControls (Boolean = false)`

If set to true, the user can change slides using the arrow-keys on the keyboard. Does not affect touch devices.

`mouseButton ({Boolean, Number} = false)`

If set to 0, 1 or 2 the user can only drag the slider using this mouse-button. 0 = Left, 1 = Middle, 2 = Right. Does not affet touch devices.

`preventClickDistance (Number = 20)`

If the user drags more pixels than set here, the click-event on the slide will be prevented. Strongly recommended to keep the same as the threshold.

`responsive (Array = [])`

Can be used to set several Breakpoints with different settings. Check out the demo for further instructions.

`startAtPage (Number = 0)`

The slideshow will initialize on the defined Page. Note that this will not alter the order of pages but rather just start at the given page.

`infinite (Boolean = false)`

If this is set to true, the slideshow will loop and start again from the beginning if you scroll further at the end.

## Demos 

Sounds all fine and dandy, but I'm sure you want to look at some examples first, to see if Lumens is the right thing for you. So here you go:

[Demo Page](https://juggern4ut.github.io/LumensSlider/)

## Authors

* **Lukas Meier** - [Juggern4ut](https://github.com/Juggern4ut)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Lukas Meier
