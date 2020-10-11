function currentDateTime() {
    let today = new Date();
    let day = today.getDay();
    let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let hours = today.getHours();
    meridiem = (hours>12)? 'PM' : 'AM';
    hour = (hours>12)? hours - 12 : hours
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    alert('Today is: '+ days[day]+ '\n'+'Current time is: '+ hour+ ' ' +meridiem+ ' : '+ minutes+ ' : '+ seconds);
}

function reverseNum() {
    let num = prompt("Enter a number", '');
    if (!isNumeric(num)) {
        alert('input number :3');
    }
    else {
        let newNum = "";
        for (let i = num.length - 1; i >= 0; i--) {
            newNum += num[i];
        }
        alert('Result: ' + newNum)
    }
}

function findFactorial() {
    let num = prompt("Enter a number", '');
    if (!isNumeric(num)) {
        alert('input number :3');
    }
    else {
        if (num<0) {
             alert('Number should be greater that zero;)');
        }
        else if (num==0) {
             alert('Result = 1');
        }

        else {
            let fact = 1;
            for (let i =1; i<=num; i++) {
                fact*=i;
            }
            alert('Result = ' + fact);
        }
    }
}

function findLarger() {
    let data = prompt("Enter two numbers separated by a space", '');
    let num = data.split(' ');
    if (!isNumeric(num[0]) || !isNumeric(num[1])) {
        alert('incorrect input :c');
    }
    
    else {
        let result = (num[0]>num[1])? num[0] : (num[0]<num[1])? num[1] : 'they equal';
        alert('Result: ' + result);
    }
}

function joinToString(arr) {
    return arr.join(',');
}

function month_name(date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var mon = date.getMonth();
    return months[mon];
}

function checkUppercase() {
    let str = prompt("Enter string", '');
    let result = (str[0] == str[0].toUpperCase());
    alert('Result: ' + result);
}

function isNumeric(str) {
  if (typeof str != "string") {
      return false;
  }
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function correctPatter() {
    let string1 = document.getElementById('string-1').innerHTML;
    let string2 = document.getElementById('string-2').innerHTML;
    let string3 = document.getElementById('string-3').innerHTML;
    let string4 = document.getElementById('string-4').innerHTML;
    let string5 = document.getElementById('string-5').innerHTML;
    let string6 = document.getElementById('string-6').innerHTML;
    console.log(string3 + '\n' + string5 + '\n' + string2 + '\n' + string6 + '\n'+ string4+'\n'+string1);
}


const RED = '#cd0000';
const GREEN = '#009a00';

function changeColor() {
    let arr = document.getElementsByClassName('element');
    for (let i = 0; i<3; i++) {
        arr[i].style.color = RED;
    }
    for (let i = 3; i<6; i++) {
        arr[i].style.color = GREEN;
    }
}

function addLi() {
    let tasks = [];
    for (let i =0; i<5; i++) {
        let data = prompt("Enter " + (i+1) + " li element", '');
        let li = document.createElement('li');
        let innerText = document.createTextNode(data);
        li.classList.add('task');
        li.appendChild(innerText);
        document.getElementById('todo-list').appendChild(li);
    }
    document.getElementById('todo-list').style.listStyle = 'none';
}

function changeItem() {
    let cart_items = document.getElementsByClassName('cart-item');
    cart_items[1].remove();

    // new span item
    let newSpan = document.createElement('span');
    newSpan.classList.add('qty');
    let newSpanContent = document.createTextNode(' x 4');
    newSpan.appendChild(newSpanContent);

    // new div item
    let newItem = document.createElement('div');
    newItem.classList.add('cart-item');
    let newItemContent = document.createTextNode('Canned Fish');
    newItem.appendChild(newItemContent);
    newItem.appendChild(newSpan);

    // replacing item
    cart_items[3].parentNode.replaceChild(newItem, cart_items[3]);
}

function addTask() {
    console.log('here')
    let ul = document.createElement('ul');
    let task6 = document.getElementById('task6');
    task6.appendChild(ul);
    while (true) {
        let li = document.createElement('li');
        let text = prompt('enter text: ', '');

        if (!text) {
            break;
        }
        li.textContent = text;
        ul.appendChild(li);
    }
    ul.style.listStyle = 'none';
}
