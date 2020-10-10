var arr = document.getElementsByClassName('element');

const RED = '#cd0000';
const GREEN = '#009a00';

for (let i = 0; i<3; i++) {
    arr[i].style.color = RED;
}

for (let i = 3; i<6; i++) {
    arr[i].style.color = GREEN;
}