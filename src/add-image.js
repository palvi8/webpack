import KIWI from './Kiwi.jpeg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Kiwi';
    img.width = 300;
    img.src = KIWI;

    const body = document.querySelector('body');
    body.append(img);
}

export default addImage;