// 0. Введение //

console.log(3 + 2) // console - объект, log - метод 
console.dir()
console.table() // все свойства объекта в табличном виде

// (||) - или; 
// (<=) - меньше или равно; 
// (!==) - не равно; 

// 1. Объявление переменных //

// let, const, var

let a // необязательно указывать тип переменной
const c = 10 // новое значение нельзя присвоить
a = true

console.log(a)

// string
// boolean
// number
// null
// undefined
// symbol 

const myCity = {
    city: 'New York', 
    popular: true,
    country: 'USA', 
    info: {
        isPopular: true, 
        country: 'USA'
    }
}

console.log(myCity.info.isPopular)

console.log(myCity.city)

myCity.city = 'Russia'

console.log(myCity.city)

delete myCity.info['isPopular'] // удаление свойства объекта myCity

// 2. Использование переменных для формирования объекта. //

const name = 'Bogdan'
const postsQty = 23 

const userProfile = {
    name: name, 
    postsQty: postsQty, 
    hasSignedAgreement: false
}

console.log(userProfile)

// 3. Глобальные объекты. window (для веб-браузера) и global. //

//console.log(globalThis)

const myCityfunc = {
    city: 'New York',
    cityGreeting() { // функция
        console.log("Greeting!")
    }
}

console.log(myCityfunc.cityGreeting())

console.log(JSON.stringify(userProfile)) // создание JSON объекта из Java Script объекта (получили строку)
console.log(JSON.parse(JSON.stringify(userProfile))) // парсинг JSON Java Script объект 

// 4. Функции //

let f = 5
let b = 3

function sum(a, b){ // можно передавать как в Python
    const c = a + b
    return c
}

console.log(sum(f, b))

console.dir(sum)

console.log(sum.name) // можно получить название функции 

const personOne = {
    name: 'Bob', 
    age: 21
}

function increasePersonAge(person){
    const updatedPerson = Object.assign({}, person) // создание копию объекта, который был передан в функцию
    updatedPerson.age += 1
    return updatedPerson
}

increasePersonAge(personOne) // лучше не менять внешние объекты внутри функции (а создать копию)
console.log(personOne.age)

// 4. Колбэк функции // 

function anotherFunction(){
    // Действия ...
}

function fnWithCallback(callbackFunction){
    callbackFunction() // вызываем другую функцию, переданную в параметре
}

fnWithCallback(anotherFunction)

setTimeout(increasePersonAge, 1000) // вызывает функцию, переданную как первый аргумент и будет вызвана через 1000 миллисекунд