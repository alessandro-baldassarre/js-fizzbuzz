

// 1) creare una sequenza di numeri da 1 a 100 (ciclo for)
// 2) per ogni numero verificare se sia multiplo di 3,5 o entrambi (if all'interno del ciclo)
// 3) stampare il n con la specifica del controllo effettuato sui multipli (console.log/innerHTML all'interno dell'if)


for (let i = 1; i <= 100; i++){

    const wrapperBox = document.querySelector("#wrapper-box");
    let newBox = document.createElement("div");
    

    newBox.classList.add("box", "border", "border-dark", "m-5", "rounded-circle", "text-center");
    newBox.innerHTML = i;
    wrapperBox.append(newBox);
    
    

    if((i % 3) == 0){
        if((i % 5) == 0){
            
            console.log(i + " FizzBuzz");
            newBox.classList.remove("border-dark");
            newBox.classList.add("border-success", "border-5");
            
        }
        else{
            console.log(i + " Fizz");
            newBox.classList.remove("border-dark");
            newBox.classList.add("border-danger", "border-5");
        }
    }
    else if((i % 5) == 0){
        console.log(i + " Buzz");
        newBox.classList.remove("border-dark");
            newBox.classList.add("border-warning", "border-5");
    }
    else{
        console.log(i);
    }

}

