import KIWI from './Kiwi.jpeg';
import './kiwi-image.scss';

class KiwiImage {
    render(){
        const img = document.createElement('img');
        img.src = KIWI;
        img.alt = 'kiwi';
        img.classList.add('kiwi-image');

        const body = document.querySelector('body');
        body.append(img); 
    }
}

export default KiwiImage;