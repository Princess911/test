/*
    动态添加节点
*/

// <li>swift</li>
const oList = document.querySelector('#list1')

const oliElement = document.createElement('li')
oliElement.textContent = 'swift'

// const oTextNode = document.createTextNode('swift')
// oliElement.appendChild(oTextNode)
// oList.appendChild(oliElement)
//oList.append(oliElement)

//oList.prepend(oliElement)

// 插入成第二子节点
// oList.firstElementChild.after(oliElement)

// 插入成倒数第二个子节点
// oList.lastElementChild.before(oliElement)

//oList.lastElementChild.remove()

// 替换JavaScript节点

//oList.lastElementChild.previousElementSibling.replaceWith(oliElement)

oList.lastElementChild.classList.add('list1')
oList.lastElementChild.previousElementSibling.classList.add('list')
//oList.classList.remove('list1')
oList.firstElementChild.classList.toggle('list1')

oList.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('list1')
})