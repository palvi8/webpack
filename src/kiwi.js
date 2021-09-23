import KiwiImage from "./components/kiwi-image/kiwi-image.js";
import Heading from "./components/heading/heading.js";
import React from 'react';

const heading = new Heading();
const kiwiImage = new KiwiImage();
heading.render('Kiwi page');
kiwiImage.render();
