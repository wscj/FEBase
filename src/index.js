import './index.css'
import icon from './img.jpg'
import './icomoon/style.css'
import './index.scss'

const div = document.createElement('div')
div.innerText = 'Add child element.'
document.body.appendChild(div)

const img = new Image()
img.src = icon
document.body.appendChild(img)

const span = document.createElement('span')
span.className = 'icon-home'
document.body.appendChild(span)
