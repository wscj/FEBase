import './index.css'
import icon from './img.jpg'
import './icomoon/style.css'
import './index.scss'
import './index.less'
import 'velocity-animate'

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

const button2 = document.createElement('input')
button2.type = 'button'
button2.value = 'Velocity'
document.body.appendChild(button2)
button2.onclick = function(e) {
	Velocity(e.target, 
		{ height: '50px' }, 
		{ 
			duration: 200, 
			easing: 'linear',
			complete: () => {
				Velocity(e.target, { height: '30px' })
			}
		})
}

const button3 = document.createElement('input')
button3.type = 'button'
button3.value = 'Debugger'
document.body.appendChild(button3)
button3.onclick = function(e) {
	debugger
}