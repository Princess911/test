const oButton1 = document.querySelector('#myButton1')

const callback = () => {
    console.log('click1')
}
const callback2 = () => {
    console.log('click2')
}

// oButton1.addEventListener('click', callback)
oButton1.onclick = callback
oButton1.onclick = callback2
oButton1.onclick = null

oButton1.addEventListener('click', callback,true)

oButton1.addEventListener('click', callback2)

oButton1.removeEventListener('click', callback,true)