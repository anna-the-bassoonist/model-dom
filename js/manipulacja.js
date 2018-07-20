let parFirst = document.getElementById('parFirst');

//get:
//-pobieram co jest w srodku konsoli
//do konsoli lapie rodzica i prosze zeby pokazal co tam jest
console.log(parFirst.innerHTML);

//set :
//kiedy robie przypisanie to robie ustawienie czegos na nowo

parFirst.innerHTML += '<span>Lorem impum</span>';

//+=: dodaje do tego co bylo w srodku
//=: dodaje zamiast tego co bylo w srodku

let parSecond = document.getElementById('parSecond');
//get
console.log(parSecond.innerText);

//set
parSecond.innerText += '<p>To jest nowy tekst w tym akapicie</p>';

//outerHTML
let nav = document.getElementById('main-nav');

//zastapilismy kontener o id main-nav. a potem zmienilismy jego tresc komenda ponizej:
nav.outerHTML += '<nav id="new-nav"><ul><li><a href="#">new link</a></li></ul></nav>';

//element.nazwa_atrybutu = 'nowa wartosc'
document.getElementById('link').href = 'http://google.com';
//bez przypisania byloby get a tak jest set

//className
//document.getElementById('link').className = "nowa_klasa"; klasa wpisana na sztywno

//!!!!lepiej uzywac tego:
document.getElementById('link').classList.add("nowa_klasa"); 
document.getElementById('link').classList.remove("google"); 

//mozna wpisywac kazda wlasciwosc styli css jaka chcemy/
document.getElementById('link').style.color = 'red';




