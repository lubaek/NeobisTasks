var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

for (let i = 0; i<tasks.length; i++) {
    var li = document.createElement('li');
    var innerText = document.createTextNode(tasks[i]);
    li.classList.add('task');
    li.appendChild(innerText);
    document.getElementById('todo-list').appendChild(li);
}

document.getElementById('todo-list').style.listStyle = 'none';