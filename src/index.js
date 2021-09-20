import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";

const heading = new Heading();
const helloButton = new HelloWorldButton();
heading.render();
helloButton.render();

if(process.env.NODE_ENV === 'production'){
    console.log('Production mode');
} else if(process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}