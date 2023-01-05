//Якщо змінна a дорівнює 10, то виведіть 'Вірно', інакше виведіть 'Неправильно'.

// let conf = confirm("Якщо змінна a дорівнює 10, то виведіть 'Вірно', інакше виведіть 'Неправильно'.")
// if (conf == true) {
//     alert('Вірно')
// } else {
//     alert('Неправильно')
// }

// let a = 10
// if (a === 10) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }

//----------------------------------------

//У змінній min лежить число від 0 до 59. Визначте, в яку чверть години потрапляє це число (У першу, другу, третю або четверту).

// let min = prompt('Введіть число')
// if (min < 15 && min > 0) {
//     alert('Перша')
// }
// else if (min < 30 && min > 0) {
//     alert('Друга')
// }
// else if (min < 45 && min > 0) {
//     alert('Третя')
// }
// else if (min < 59 && min > 0) {
//     alert('Четверта')
// } else {
//     alert('Помилка')
// }

// let min = prompt('Введіть число');
// (min < 15 && min > 0) ? document.write('Перша') : (min < 30 && min > 0) ? document.write('Друга') : (min < 45 && min > 0) ? document.write('Третя') : (min < 60 && min > 0) ? document.write('Четверта'): alert('Помилка');


//--------------------------------------------------

//Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення '1', то змінну result запишемо 'зима',
//якщо має значення '2' – 'весна' тощо.Розв'яжіть завдання через switch-case.

// let years = prompt('Выбери время года от 1-4')
// switch (years) {
//     case '1':
//         alert('Зима')
//         break
//     case '2':
//         alert('Весна')
//         break
//     case '3':
//         alert('Лето')
//         break
//     case '4':
//         alert('Осень')
//         break
// }

//------------------------------------------------------

//Використовуючи цикли та умовні конструкції намалюйте ялинку

// for (let i = 0; i < 10; i++){
//     for (let k = (10 - i); k > 0; k--){
//         document.write('&nbsp;')
//     }
//     for (let j = 0; j <= i; j++){
//         document.write('*')
//     }
//     document.write('<br>')

// }

// for (let i = 0; i < 10; i++){
//     for (let spase = (10- i); spase > 0; spase--){
//         document.write('&nbsp;')
//     }
//     for (let j = 0; j <= i; j++){
//         document.write('*')
//     }
//     document.write('<br>')
// }

//---------------------------------------------

// Використовуючи умовні конструкції перевірте вік користувача, якщо користувачеві буде від 18 до 35 років
// переведіть його на сайт google.com через 2 секунди, якщо вік користувача буде від 35 до 60 років,
// переведіть його на сайт https://www.uz.gov.ua/, якщо користувачеві буде до 18 років покажіть йому першу серію лунтика з ютубу

// const age = prompt('Скільки Вам років?')
// if (age <= 18) {
//     // location.href = 'https://www.youtube.com/watch?v=icdSZKq9-sM';
//     document.write('<meta http-equiv="refresh" content="3;URL=https://www.youtube.com/watch?v=icdSZKq9-sM">')
// }else if (age < 35 && age >= 0) {
//     // location.href = 'https://www.google.com';
//     document.write('<meta http-equiv="refresh" content="3;URL=https://www.google.com">')
// }else if (age < 60 && age >= 0) {
//     // location.href = 'https://www.uz.gov.ua/';
//     document.write('<meta http-equiv="refresh" content="3;URL=https://www.uz.gov.ua/">')
// } else {
//     alert('Ви ввели не якусь ху&&ню')
// }

//------------------------------------------------

//Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.

// let arr = ['a', 'b', 'c']
// let arr2 = [1, 2, 3]
// let res = arr.concat(arr2)
// console.log(res)

//----------------------------------------------

//Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.
// let arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr);

//--------------------------------------------
//Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].
// let arr = [1, 2, 3]
// arr.reverse()
// console.log(arr)

//--------------------------------------------------------

//Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.
// let arr = [1, 2, 3]
// arr.push(4, 5, 6)
// console.log(arr)

//---------------------------------------------------------
//Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.
// let arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr)

//-------------------------------------------------------
//Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.
// let arr = ['js', 'css', 'jq']
// document.write(arr[0])

//------------------------------------------------------
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].

// let arr = [1, 2, 3, 4, 5]
// res = arr.slice(0, 3)
// console.log(res)

//-------------------------------------------------------
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].

// let arr = [1, 2, 3, 4, 5]
// let del = arr.splice(-4, 2)
// console.log(arr)

// const arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr)

//------------------------------------------------------
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(2, 0, 10)
// console.log(arr)

//------------------------------------------------

//Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.

//-----------------------------------------------

//Дан масив з елементами 'Привіт, ', 'світ' і '!'. Необхідно вивести на екран фразу 'Привіт, світ!'.
// let arr = ['Привіт, ', 'світ', '!']
// res = arr.join('')
// document.write(res)

//----------------------------------------------

//Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.
// let arr = []
// arr.push(1, 2, 3, 4, 5)
// console.log(arr)

// let arr = []
// for (i = 1; i <= 5; i++){
//     arr.push(i)
// }console.log(arr)

//----------------------------------------------

//Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.

// let arr = ['a', 'b', 'c', 'd']
// document.write(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`)

//----------------------------------------------
//Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач
//створіть масив на ту кількість елементів, яку передав користувач.у кожному індексі масиву
//зберігайте чило який показуватиме номер елемента масиву.

//Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.

// let user = parseInt(prompt('Введіть данні!!'))
// let arr = new Array(user)
// for (let i = 0; i < arr.length; i++){
//     arr[i] = i + 1
//     if (arr[i] % 2 == 0) {
//         document.write(`<span>${arr[i]}</span>`)
//     }

//     if (arr[i] % 2 !== 0) {
//         document.write(`<p>${arr[i]}</p>`)
//     }

// }
//----------------------------------------------
//Делаем прямоугольник
// for (let i = 0; i < 10; i++) {
    
//     for (let j = i; j < 10; j++){
//         document.write('<span>*</span>')
//     }
//     for (let k = i; k > 0; k--){
//         document.write('<span class="gri">*</span>')
//     }
//     document.write('<span class="i"><br></span?')
// }

//------------------------------------
//Делаем электронный кошелек

// const wallet = {
//     name: 'Alex',
//     btc: {
//         name: 'Bitcoin',
//         logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'>",
//         rate: '708868.69',
//         coin:'54'
//     },
//     ehr: {
//         name: 'Ethereum',
//         logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'>",
//         rate: '47855.34',
//         coin:'27'
//     },
//     xlm: {
//         name: 'Stellar',
//         logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/512.png'>",
//         rate: '4.16',
//         coin:'37'
//     },
//     show: function (nameCoine) {
//         document.getElementById('wallet').innerHTML = `Добрый день, ${wallet.name}! На вашем
//         балансе ${wallet[nameCoine].name} ${wallet[nameCoine].logo} осталось ${wallet[nameCoine].coin} могет,
//         если вы сегодня продадите их то, получите ${(wallet[nameCoine].rate*wallet[nameCoine].coin*31).toFixed(2)} грн.`
//     }
// }
// wallet.show(prompt('Введіть назви монет:','btc,ehr,xlm'))
//-----------------------------------

// const a = () => {
//     alert('Hello world')
// }

// a()

//---------------------

// Функція ggg приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, яка
// повертає 4. Поверніть результатом функції ggg суму 3 та 4.

// let a = 3;
// let b = 4;

// function ggg(x1, x2) {
//     return x1() + x2()
// }
// let rez = ggg(
//     function () { return 3 },
//     function () {return 4}
// )
// document.write(rez)

// Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня українською мовою

// const day = Math.floor(Math.random() * 7 + 1)
// console.log(day)
// function dayWeek(day) {
//     switch (day) {
//         case 1: return 'Понеділок';
//         case 2: return 'Вівторок';
//         case 3: return 'Середа';
//         case 4: return 'Четверг';
//         case 5: return 'П ятниця';
//         case 6: return 'Субота';
//         case 7: return 'Неділя';
//     }
// }
// document.write(dayWeek(day))
//-------------------------------

// Дан рядок типу "var_text_hello". Зробіть із нього текст "VarTextHello".

// const str = 'var_text_hello'
// function textHello(str) {
//     let arr = str.split('_')
//     for (let i = 0; i < arr.length; i++) {
//        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
//     }
//     return arr.join('')
// }
// console.log(textHello(str))

//------------------------------------

// Створіть функцію, яка заповнюватиме масив 10-ма іксами  за допомогою циклу

// function x() {
//     let arr = []
    
//     for (let i = 0; i < 10; i += 1){
//         arr.push('x')
//     }
//     return arr
        
// }

// console.log(x())

//----------------------------------

// Використовуючи CallBack function, створіть калькулятор, який буде від користувача приймати 2 числа
// і знак арефметичної операції. При введенні не числа або при розподілі на 0 виводити помилку.

// const match = {
//     plus: function (a, b) {
//         return a + b
//     },
//     minus: function (a, b) {
//         return a - b
//      },
//     mult: function (a, b) {
//         return a * b
//      },
//     div: function (a, b) {
//         if (b === 0) {
//             return console.error('на нуль не ділиться')
//         }
//         return a / b
//     }
// }

// const num1 = parseFloat(prompt('Ввудіть значення'))
// const num2 = parseFloat(prompt('Введіть друге значення'))
// const name = prompt('Введіть знак')

// function calc(a, b, c, d) {
//     if (c === '+') {
//         return d.plus(a, b)
//     } else if (c === '-') {
//        return d.minus(a, b)
//     } else if (c === '*') {
//        return d.mult(a, b)
//     } else if (c === '/') {
//        return d.div(a, b)
//     } else {
//         console.error('не вірний знак операції')
//     }
// }
// const res = alert(calc(num1, num2, name, match))
//---------------

// let arr = [2, 3, 5, 1, 4, 9]
// function callback(a, b, c) {
//     //a - element
//     //b - index
//     //c - arr
//     console.log(a)
// }
// arr.forEach(callback)
//------------------------------

// function add(arg1, arg2) {
//     return arg1 + arg2
// }

// function multiply(arg1, arg2) {
//    return arg1 * arg2
// }

// let a = multiply(36325, 9824)
// let rez = add(a, 777)
// console.log(rez)
//--------------------------------

// let obj = new Object()

// obj.name = 'Ivan'
// console.log(obj)
//---------------
// const mydate = new String()
// console.log(typeof(mydate))

//---------------------------------------------

// let balance = 10000
// const payment = 2000
// let res
// const massage = alert(`Общая стоимость заказа ${payment} кредитов. Проверяем
// количество доступных средств на счету`)
// if (payment <= balance) {
//     res = balance - payment
//     alert(`На счету осталось ${res} кредитов`)
//     alert('Операция завершена')
// } else {
//     alert(`На счету не достаточно для проведения операции`)
    
//     }
// alert('Операция завершена')


// let totalSpent = 20000
// let payment = 500
// let discount = 0
// if (totalSpent >= 100 && totalSpent <= 1000) {
//     console.log('бронзовый партнер, скидка 2%')
//     discount = 0.02
// }else if (totalSpent >= 1000 && totalSpent <= 5000) {
//     console.log('серебрянный партнер, скидка 5%')
//     discount = 0.05
// }else if (totalSpent >= 5000) {
//     console.log('золотой партнер, скидка 10%')
//     discount = 0.1
// }else if (totalSpent <= 100) {
//     console.log('не партнер, скидка 0%')
// }
// payment = payment - payment * discount
// console.log(`оформляем заказ на сумму ${payment}, со скидкой
// ${discount * 100}%`)
// totalSpent += payment
// console.log(`Общая сумма потраченого в магазине ${totalSpent}`)

// const stars = 1
// let price
// switch (stars) {
//     case 1:
//         price = 20
//         break;
//     case 2:
//         price = 30
//         break
// }
// console.log(price)

// const minSalary = 500
// const maxSalary = 5000
// const employees = 3
// let total = 0
// let totalSalary = 0
// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
//     console.log(`ЗП работника номер ${i} - ${salary} `)
//     total += salary
// }console.log(total)

// const min = 6
// const max = 13
// let total = 0
// for (let i = min; i <= max; i += 1){
//     if (i % 2 != 1) {
        
//         total += i
//     }
// }console.log(total)

// const arr = ['Alex', 'Anna', 'Sasha', 'luda']
// console.table(arr)

//

// let cart = [54, 28, 105, 70, 92, 17, 120]
// let result = 0
// for (let i = 0; i < cart.length; i += 1){
//     result += cart[i]
// }console.log(result)

// let cart = [54, 28, 105, 70, 92, 17, 120]
// let result = 0

// for (elem of cart) {
//     result += elem
// }console.log(result)

// const number = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]
// let result = 0
// for (elem of number) {
//     if (elem % 2 != 1) {
//         console.log(elem)
//         result += elem
//     }
// }console.log(result)
 
// const login = ['fn2i2hfb2', 'dj8239fh', 'jcnendew9', 'cweow838f']
// const loginToFind = 'jcnendew9'

// for (let i = 0; i < login.length; i += 1){
//     if (loginToFind === login[i]) {
//         console.log('Пользователь логин найден')
//         break
//     } else {
//         console.log('Пользователь логин не найден')
//     }
// }

// const login = ['fn2i2hfb2', 'dj8239fh', 'jcnendew9', 'cweow838f']
// const loginToFind = 'jcnendew9'

// console.log(login.includes('jcnendew9'))// один вариант

// const message = login.includes(loginToFind) ? 'yes' : 'no'
// console.log(message)// второй вариант

// const number = [51, 18, 13, 24, 7, 85, 19]
// let num = number[0]
// for (elem of number) {
    
//     if (elem < num) {
//         num = elem
//     }
// }console.log(num)

// const numbers = [51, 18, 13, 24, 7, 85, 19]
// let bigNum = numbers[0]
// for (number of numbers) {
//     if (number > bigNum) {
//         bigNum = number
//     }
// }console.log(bigNum)

// const array1 = [5, 10, 15, 20]
// const array2 = [10, 20, 30]
// let arr1 = 0
// let arr2 = 0
// let res
// for (num of array1) {
//     arr1 += num
// }
// for (num of array2) {
//     arr2 += num
// }
// res = arr1 + arr2
// console.log(res)

// const add  = function (x, y) {
//     return x + y
// }
// let num = add(10, 5)
// console.log(num)

// const logins = ['kldsncwfe8', 'bfvr7', 'jfv8e', 'kjdsfb7']

// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {
            
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден`
//         }
//     }
//     return `Пользователь ${loginToFind} не найден`
// }
// console.log(findLogin(logins, 'klsncwfe8'))
// console.log(findLogin(logins, 'bfvr7'))
// console.log(findLogin(logins, 'jv8e'))
// console.log(findLogin(logins, 'kjdsfb7'))

// const playlist = {
//     name: 'Мой первый плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// const propertyName = 'tracks'
// console.log(playlist['propertyName'])

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// const keys = Object.keys(feedback)
// console.log(keys)

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// const values = Object.values(feedback)
// console.log(values)

// const arr = [1, 2, 3].concat([3, 4, 5, 6])
// console.log(arr)

// const numbers = [1,2,3,...[221, 16]]
// console.log(numbers)


//Объекты

// Метод конкат

// const arr = [1, 2, 3].concat([4, 5, 6], [7, 8, 9])
// console.log(arr)

// Метод распыления
// const arr = [100, ...[1, 2, 3], 200, ...[4, 5,6]]
// console.log(arr)


// const temps = [18, 14, 12, 21, 29, 24]
// console.log(Math.max(...temps))

// const a = { x: 1, y: 2 }
// const b = { x: 0, z: 3 }
// const c = Object.assign({}, a, b)
// console.log(c)

// const a = { x: 1, y: 2 }
// const b = { x: 0, z: 3 }
// const c = {...a, ...b}
// console.log(c)

// const playtList = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     stats: {
//         one: 1,
//         two: 2,
//         three: 3,
//     }
// }
// const { name: superName, rating, tracks, trackCount, stats: {one, two, three}, } = playtList
// console.log(superName, rating, tracks, trackCount, one, two, three)

// const rgb = [255, 100, 80]
// const [red, green, blue] = rgb
// console.log(red, green, blue)

const obj = {
    a: 1,
    b: 2,
    c: 3, 
}
 const objKeys = Object.values(obj)
 console.log(objKeys)

// const authors = {
//     kivi: 4, 
//     poly: 7, 
//     ajax: 9, 
//     mango: 6, 
// }

// const entries = Object.entries(authors)
// for (const entry of entries) {
//     const [name, rating] = entry
    
//     console.log(name, rating)
// }

// const a = { x: 1, y: 2 }
// const b = { x: 0, z: 3 }
// const c = {...a, ...b}
// console.log(c)

// const myCrazyObject = {
//     name: ' Нелепый объект',
//     someArray: [7, 9, {'purpose': ' путаница ', 'number': 123}, 3.3], 
//     randomAnimal:' Банановая акула'
// }
// console.log(myCrazyObject)
// const {someArray } = myCrazyObject
// console.log(someArray[2].number)








































