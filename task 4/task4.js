var paragraphs = document.getElementsByTagName('p');

for (let i= paragraphs.length - 1; i>=0; i--) {

    var hr = document.createElement('hr');
    paragraphs[i].parentNode.insertBefore(hr, paragraphs[i].nextSibling);

}
