# Lumens.js

Simple JavaScript carousel with no dependencies

## Description

Lumens is a very tiny and very easy to use JavaScript carousel. It works with plain vanilla JavaScript and uses no CSS or other stuff.

## Features

- Easy to use. Just import the class and create a new JS-Object
- Tiny. Make sure you have a mangnifying glass or you might miss it all together.
- Responsive. Doesn't really need an explenation now does it?
- Configurable. Who would have thought...
- Callbacks. Do stuff when stuff was done.
- Prevents click-event on drag. You think that should be a default, but sadly, it's really not.

## Getting Started

Using Lumens is as simple as it can get. Just import dist/main.js into your project (or js/lumens.js if you use a builder like webpack or so) and you're all set.

### Setup

Generate a HTML markup that looks like this:

```
<div id="lumens">
  <div>My Slide 1</div>
  <div>My Slide 2</div>
  <div>My Slide 3</div>
  <div>My Slide 4</div>
  <div>My Slide 5</div>
</div>
```

Now all you have to do is initialize the slider like so:

```
var mySlider = new Lumens("#lumens")
```

That's the most simple setup using all the default options. If you want to pass your own options, you can set them using an object as the second argument.

```
var mySliderWithOptions = new Lumens("#lumens", {
  slidesPerPage: 3,
  margin: 20
})
```

## Authors

* **Lukas Meier** - *Initial work* - [Juggern4ut](https://github.com/Juggern4ut)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Me
* Myself
* Lukas Meier