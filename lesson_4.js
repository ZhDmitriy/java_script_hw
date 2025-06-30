const myArray = [1, 2, 3]
console.log(myArray); 

const newArray = myArray.map(el => el * 3); // формирует новый массив 

console.log(newArray);
console.log(myArray);

// Условные инструкции 

// if 
// if .. else 
// switch
// тернарный оператор

// if (условие) {
    // Блок кода, выполняемый однократно, если условие правдиво
// }

let val = 10; 

if (val > 5) {
    val += 20
}

console.log(val)

// цикл for 
for (let i = 0; i < 5; i++){
    console.log(i)
}

// Классы и прототипы

class Text{
    constructor(text){
        this.text = text
        this.votesQty = 0
    }

    upvote(){ // увеличиваем значение на 1
        this.votesQty += 1
    }
}