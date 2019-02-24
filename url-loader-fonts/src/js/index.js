import '../css/estilos.css';
import { firstMessage, delayedMessage } from './message.js';
import platziImg from '../images/platzi.png';

document.write(firstMessage)
delayedMessage()
const img = document.createElement('img')
img.setAttribute('src',platziImg)
img.setAttribute('width','50px')
img.setAttribute('height','50px')
document.body.append(img)
console.log("from external with styles")