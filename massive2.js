// -----------------------------------------------------
// Взаимодействие с массивом
// Методы
// push(n) - добавить элемент в конец массива
// pop(n) - удалить последний элемент массива
// unshift(n) - добавить аргумент n в начало массива
// shift(n) - удалить первый элемент массива
// let a = [1, 2, 3]

// a.pop()
// a.shift()
// a.push(4)
// a.unshift(0)
// console.log(a)
// -------------------------------------------------------------------------------------------------
// Задача:
// Напиши программу которая удалит n-ое количество элементов, пока не найдется булевый тип по примеру:
// let array = [1,2,3,4,true,0,2]
// результат: 
// [true,0,2]

// let array = [1,2,3,4,true,0,2]
// for (let i = array.length-1; i >= 0 ; i--) {
//     if (typeof array[i] != "boolean") {
//         array.pop()
//     } else {
//         break
//     }
// }
// console.log(array)

// splice() - удалить и добавить элемент в массив
// 1 аргумент - индекс начала
// 2 аргумент - кол-во элементов
// 3 аргумент  - элементы которые надо добавить
// let a = [1, 2, 3 , 4, 5, 6, 7]
// a.splice(2, 2, "три", "пять")
// a.splice(3, 0, 2)
// console.log(a)
// ------------------------------------------
// Задача 1
// Реализуйте следующие задачи в массиве array, используя метод splice:
// 1) В начале добавьте два элемент (1,2)
// 2) После 3 элемента добавьте значение (4)
// 3) Удалите последние 2 элемента
// let array = ['яблоко', "апельсин", "арбуз","дыня"]
// Результат: 
// [1,2,'яблоко', 4, "апельсин"]
// let array = ['яблоко', "апельсин", "арбуз","дыня"]
// array.splice(0, 0, 1, 2)
// array.splice(3, 0, 4)
// array.splice(array.length-2, 3)
// console.log(array)
// --------------------------------------------------
//// Задача 2. 
// Напишите функцию replaceBoolElem(array), которая заменяет каждый попавшийся булевый тип на 2 элемента массива 
// с значениями "булевый" и "тип". Функция должна вывести в косноль измененный массив
// Пример:[1,2,true,5,6] 
// Результат: [1,2,"булевый","тип",5,6]
// let boolArray = [1,2,true,5,6, false]
// function replaceBoolElem(array) {
//     for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == "boolean") {
//         array.splice(i, 1, "булевый", "тип")
//         }
//     }
//     return array
// }
// console.log(replaceBoolElem(boolArray))
// // Задача 3
// Напишите функцию addNumber(array), которая принимает массив и добавлявет элемент "Цифра" после числа согласно примеру:
// Пример: 
// let array = ['строка',1, 'hello',3 ,true]
// Результат:
// ['строка', 1, 'Цифра', 'hello', 3,'Цифра', true]
// let array = ['строка',1, 'hello',3 ,true]
// function addNumber(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] == "number" ) {
//             array.splice(i+1, 0, "Цифра")
//         }
//     }
//     return array
// }
// console.log(addNumber(array))

// --------------------------------------------------------
// Цикл по массивам
// let array = [10, 20, 30 ,40 , 50]
// for (let i of array) {
//     console.log(i)
// }


