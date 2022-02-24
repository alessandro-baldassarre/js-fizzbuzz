

// 1) creare una sequenza di numeri da 1 a 100 (ciclo for)
// 2) per ogni numero verificare se sia multiplo di 3,5 o entrambi (if all'interno del ciclo)
// 3) stampare il n con la specifica del controllo effettuato sui multipli (console.log/innerHTML all'interno dell'if)


for (let i = 1; i <= 100; i++){
    
    if((i % 3) == 0){
        if((i % 5) == 0){
            console.log(i + " FizzBuzz");
        }
        else{
            console.log(i + " Fizz");
        }
    }
    else if((i % 5) == 0){
        console.log(i + " Buzz");
    }
    else{
        console.log(i);
    }
}