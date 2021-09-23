import './heading.scss';

class Heading{
    render(message){
        const h1 = document.createElement('h1')
        const body = document.querySelector('body');

        h1.innerText = 'Webpack is Awesome. This is "' + message + '" page ';
        body.appendChild(h1);
    }
}

export default Heading;