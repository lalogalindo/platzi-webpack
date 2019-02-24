import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import platziImg from '../images/platzi.png'
import data from './teachers.json'
import renderToDom from './render-to-dom'

console.log(data)
data.teachers.forEach((teach)=>{
	const elem = document.createElement('li')
	elem.textContent = teach.name
	renderToDom(elem)
})
document.write(firstMessage)
delayedMessage()
const img = document.createElement('img')
img.setAttribute('src',platziImg)
img.setAttribute('width','50px')
img.setAttribute('height','50px')
document.body.append(img)
console.log("from external with styles")