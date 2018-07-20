//let btn = document.createElement('button');
//console.log(btn);
//w konsoli wyszedl: <button></button>

//stworzylismy Element:
let btn = document.createElement('button');
let btnTxt = document.createTextNode('Naciśnij');
let classAtr  = document.createAttribute('class');

//sprawdzamy dzieci body:
//console.log(document.body.childNodes);

//łączymy:
classAtr.value = 'btn';

//podpinamy do body:
document.body.appendChild(btn);

//wsadziłam zmienna do przycisku btn: o nazwie btnTxt i wartosci nacisnij:
btn.appendChild(btnTxt);

//do btn dodajemy klase btn:
btn.setAttributeNode(classAtr);

//!!!!!inna mozliwosc dodawania klasy!!!!!:
//btn.setAttribute('class', 'btn');
//nie potrzebujemy wdedy: 
//1.let classAtr  = document.createAttribute('class');
//2.classAtr.value = 'btn';
//3.btn.setAttributeNode(classAtr);

