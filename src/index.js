import Img from './images/ace of clubs.png'
import { add } from './js/add.js'
import './css/styles.css'
function component() {
    const element = document.createElement('div')
    element.classList.add('card')
    const myIcon = new Image()
    myIcon.src = Img
    element.appendChild(myIcon)
    add()
    return element
}
document.body.appendChild(component())
