//dzialanie uzytkownika na stronie, np:hover

//document.addEventListener('DOMContentLoaded', function() {
////    male funkcje mozemy pisac tu w srodku, duze na zewnatrz nawiasu })
////    mozna tez zakomentowac funkcje zeby w tym momencie nie dzialala
//    
//})
//dzieki komendzie addEventListener('DOMContentLoaded' upewniam sie czy strona zostala zaladowana przed wykonaniem tych skrotow
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('open').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'block';
    });

    document.getElementById('btn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
        //powyzej sprawilismy ze naciskajac przycisk popup wyswietlil sie formularz, a potem ze naciskajac przycisk zamknij ze sie zamknal
    });

    //    document.body.addEventListener('keydown',function() {
    //        this.style.backgroundColor = 'beige';
    //    })
    //    
    //     document.body.addEventListener('keyup',function() {
    //        this.style.backgroundColor = 'transparent';
    //    })

    let inputText = document.querySelectorAll('input[type="text"]');
    //    robimy petle zeby zlapac wszystkie 3 elementy
    for (let i = 0; i < inputText.length; i++) {
        inputText[i].addEventListener('change', function () {
            document.getElementById('result').innerHTML += this.value;
            //            w paragraf o id result wpisuje sie to co wpisujemy w inputy w formularzu
        })
    }
//    inny sposob na zmiane kolorow. tylko zeby dzialalo musimy zakomentowac removeEventListener
    document.body.addEventListener('keydown', zmienKolor);
    document.body.removeEventListener('keydown', zmienKolor);
    
    
    let linki = document.getElementsByClassName('link');
//    robiac petle lapiemy wszystkie linki:
    for(let i=0; i< linki.length; i++) {
        linki[i].addEventListener('click',function(event){
//          a potem zapobiegamy domyslnemu zachowaniu linkow:
            event.preventDefault();
            console.log(event);
        })
    }
})


//zmieniamy to co wyzej na funkcje:przypidanie kolorow
function zmienKolor() {
this.style.backgroundColor = 'beige';
    }

