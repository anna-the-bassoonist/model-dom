//usuwamy dziecko elementu sectionFirst:
document.getElementById('sectionFirst').removeChild(document.getElementById('parSecond'));

//usuwamy klase z linka trzeciego, ale indeks = 2 wiec jest [2]:
document.getElementsByClassName('link')[2].removeAttribute('class');



//usuwamy klase metoda Node
//zanim usuwamy artybut musimy go sobie zlapac:
let classAtr = document.querySelectorAll('.link')[2].getAttributeNode('class');
document.querySelectorAll('.link')[2].removeAttributeNode(classAtr);

