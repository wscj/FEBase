import './index.css'
import icon from './img.jpg'
import './icomoon/style.css'
import './index.scss'
import './index.less'

const div = document.createElement('div')
div.innerText = 'Add child element.'
document.body.appendChild(div)

const img = new Image()
img.src = icon
document.body.appendChild(img)

const span = document.createElement('span')
span.className = 'icon-home'
document.body.appendChild(span)

const button = document.createElement('input')
button.type = 'button'
button.value = 'Proxy'
document.body.appendChild(button)
button.onclick = function() {
	const xhr = new XMLHttpRequest()
    xhr.open('GET', '/api/ajax?sendMsg=hello')
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText)
        }
    }
    xhr.send()
}