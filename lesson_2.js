// 5. Операторы

// Оператор - это встроенная функция в Java Script

// +, -, *, /
// ===, !==, <=, >=
// ! (не), && (и), || (или)
// =

// Текстовые операторы: typeof, instanceof, new, delete

console.log(typeof 'a') 
console.log(typeof 10 === 'number')

// Оператор ... 

const button = {
    width: 200, 
    text: 'Buy'
}

const redButton = {
    ...button, // наследуем свойства объекта button
    color: 'red'
}

console.table(redButton)

// Конкатенация строк

console.log('Hello ' + 'World')
let hello = "Hello"
let world = "World"
const greeting = `${hello} ${world}` // Создание шаблонных выражений
console.log(greeting)

// Функциональное выражение 

const myFunc = function(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(myFunc(5, 6))

// Стрелочная функция 

const myFuncSt = (a, b) => {
    let c
    a = a + 1 
    c = a + b 
    return c
}

console.log(myFuncSt(4, 3))

// Значения параметорв по умолчанию 

function multByFactor(value, multiplier = 1){
    return value * multiplier
}

console.log(3, 3)

console.log(Date()) // получить текущее время

// 6. Обработка ошибок

const fnWithError = () => {
    throw new Error('Some error') // Генерация ошибок в Java Script
}

console.log('Continue...')

try{
    //Выполнение блока кода
    fnWithError()
} catch (error){
    // Этот блок выполняется в случае возникновения ошибок в блоке try
    console.log(error.message) // Ошибки можно логгировать, чтобы потом их можно было анализировать
}

// 7. Инструкции

let a; 

const b = 5; // Инструкция завершается ;

if (a > b){
    console.log('a is larger'); 
} 

for (let i = 0; i++; i < 5){
    console.log(i);
}

// Массивы (также объект)

// Массив - это объект с цифровым именами свойств.

const myArray = [1, 2, 3] // Первый способ записи
console.log(myArray)

const myArray2 = new Array(1, 2, 3) // Второй способ записи
console.log(myArray2)