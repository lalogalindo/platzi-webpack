import renderToDOM from './render-to-dom'
import makeMessage from './make-message'
const waitTime = new Promise((res,rej)=>{
	setTimeout(()=>{
		res('Delayed Message')
	}, 3000)
})
module.exports = {
	firstMessage: 'hola mundo desde modulo',
	delayedMessage: async() => {
		const message = await waitTime
		console.log(message)
		renderToDOM(makeMessage(message))
	}
}