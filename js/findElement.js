let parFirst = document.getElementById('parFirst');
console.log(parFirst);

//let links = document.getElementsByClassName('link');
//console.log(links);
//wyswietla wszystkie linki o clasie link
//HTMLCollection !==Array

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

//zwracamy liste węzłów
let links = document.querySelectorAll('.link');
console.log(links);
//NodeList

//wyszukuje tylko pierwszy element
let link  = document.querySelector('.link');
console.log(link);