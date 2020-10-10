var ul = document.createElement('ul');
document.body.appendChild(ul);

while (true) {
    let text = prompt('enter text: ', '');

    if (!text) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}