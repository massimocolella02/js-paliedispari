
// Funzione per calcolo risultato
function EvenOrOdd(x){
    let even_or_odd = document.querySelector('#evenorodd').value;

    if( x % 2 == 0 && even_or_odd == 'pari'){
        return true;
    }else if( x % 2 != 0 && even_or_odd == 'dispari' ){
        return true;
    }else{
        return false;
    }
}


function Submit(){
    //Variabili
    let numberPlayer = parseInt(document.querySelector('#number-player').value);
    let numberCPU = Math.floor(Math.random() * 5) + 1;
    let numberTotal = numberPlayer + numberCPU;
   
    //Stampe nel DOM
    document.querySelector('#player').innerHTML= `Il tuo numero è: ${numberPlayer}`;
    document.querySelector('#cpu').innerHTML= `Il numero della CPU è: ${numberCPU}`;
    
    //Risultato del gioco
    result = EvenOrOdd(numberTotal);
    if(result == true){
        document.querySelector('#risultato').innerHTML=`Il risultato è ${numberTotal} quindi vinci tu`;
    }else{
        document.querySelector('#risultato').innerHTML=`Il risultato è ${numberTotal} quindi vince la CPU`;
    }
}
