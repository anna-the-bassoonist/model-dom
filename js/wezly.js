let parFirstParentNode = document.getElementById('parFirst').parentNode;
console.log(parFirstParentNode);
//zlapalismy rodzica elementu o id:parFirst

let parFirstParentElement = document.getElementById('parFirst').parentElement;
console.log(parFirstParentElement);
//zlapalismy rodzica elementu o id:parFirst


let sectionFirstChildNodes = document.getElementById('sectionFirst').childNodes;
console.log(sectionFirstChildNodes);
//wyszlo dziecko elementu o id:sectionFirst
console.log(sectionFirstChildNodes[0].nodeName);
//jak zrobimy to z if i na koncu dodac  = #text tak pomijamy biale znaki, lub przez kasowanie spacji w html


//children zwraca TYLKO elementy HTML
let sectionFirstChildren = document.getElementById('sectionFirst').children;
console.log(sectionFirstChildren);

let prevParSecondSibling = document.getElementById('parSecond').previousElementSibling;
console.log(prevParSecondSibling);

let nextParSecondSibling = document.getElementById('parSecond').nextElementSibling;
console.log(nextParSecondSibling);