import KIWI from './Kiwi.jpeg';
import altText from './altText.txt'

function addImage() {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = KIWI;

    const body = document.querySelector('body');
    body.append(img);
}

export default addImage;