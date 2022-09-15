var element = document.querySelector("body");

function content(content, input, id) {
    var createContent = document.createTextNode(content)
    var createInput = document.createElement(input)
    var endLine = document.createElement('br')
    element.appendChild(createContent)
    element.appendChild(createInput)
    if (content) {
        createInput.setAttribute('id', content)
    }
    element.appendChild(endLine)
}

content('a', 'input');
content('b', 'input');
var button = document.createElement('button')
document.body.appendChild(button)
button.innerText = 'Sum'

button.onclick = function() {
    var a = parseInt(document.getElementById('a').value)
    var b = parseInt(document.getElementById('b').value)

    document.body.appendChild(document.createElement('p')).innerHTML = a + b
}