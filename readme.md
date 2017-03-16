# alfred-coolors [![Build Status](https://travis-ci.org/radibit/alfred-coolors.svg?branch=master)](https://travis-ci.org/radibit/alfred-coolors)

> Color name generator

<img src="media/screencast.gif" width="580">

## Install

```
$ npm i -g alfred-coolors
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

In Alfred, type `coolor`, <kbd>Enter</kbd>, and color in HEX format 🎉

There is also support for HSL, RGB, and RGBA.

Each result contains an approximate match in percentages.
It uses [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance#Three_dimensions) to calculate how close is the selected color to a set of defined colors with names.

Thanks to @zeke and his [color-namer](https://github.com/zeke/color-namer) package 🙌

## License

MIT © [radibit](https://radibit.com)
