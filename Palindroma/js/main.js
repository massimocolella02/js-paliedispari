

//variabili
let parola = document.getElementById('input-palindromo').value;
const button = document.querySelector('button');

//funzione per capovolgere la parola
function Palindrome(){
    const parolaReverse= parola.split('').reverse().join('');

    if( parola === parolaReverse ){
        return true;
    }else{
        return false; 
    }
}

//funzione del bottone per avere il risultato
button.addEventListener('click', Invio);
function Invio(){

    parola = document.getElementById('input-palindromo').value;

    result= Palindrome(parola)
    if(result == true){
        alert(`${parola} è palindroma`)
    }else{
        alert(`${parola} non è palindroma`)
    }
    
}
