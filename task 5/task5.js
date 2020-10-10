var cart_items = document.getElementsByClassName('item');
cart_items[1].remove();

// new span item
var newSpan = document.createElement('span');
newSpan.classList.add('qty');
var newSpanContent = document.createTextNode(' x 4');
newSpan.appendChild(newSpanContent);

// new div item
var newItem = document.createElement('div');
newItem.classList.add('item');
var newItemContent = document.createTextNode('Canned Fish');
newItem.appendChild(newItemContent);
newItem.appendChild(newSpan);

// replacing item
cart_items[3].parentNode.replaceChild(newItem, cart_items[3]);

