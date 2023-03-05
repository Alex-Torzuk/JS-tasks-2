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
// function callback (a, b, c) {
//     //a - element
//     //b - index
//     //c - arr
//     console.log(a)
// }
// // arr.forEach(callback)
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

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
//  const objKeys = Object.values(obj)
//  console.log(objKeys)

// const authors = {
//     kivi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }

// const entries = Object.entries(authors)
// // console.log(entries)
// for (const entry of entries) {
//     // console.log(entry)
//     const [name, rating] = entry
    
//     console.log(name, rating)
// }

// const playtList = {
//         name: 'Мой супер плейлист',
//         rating: 5,
//         tracks: ['трек-1', 'трек-2', 'трек-3'],
//         trackCount: 3,
//         stats: {
//             one: 1,
//             two: 2,
//             three: 3,
//         }
//     }
//     const {name, rating, ...newPlaylist} = playtList
//     console.log(name, rating)
//     console.log(newPlaylist)
      

// const showProfileInfo = function (profile) {
//     const {name, rating, tracks, trackCount, stats} = profile
    
//     console.log(name, rating, tracks, trackCount, stats)
// }

//     const playtList = {
//         name: 'Мой супер плейлист',
//         rating: 5,
//         tracks: ['трек-1', 'трек-2', 'трек-3'],
//         trackCount: 3,
//         stats: {
//             one: 1,
//             two: 2,
//             three: 3,
//         }
//     }
// showProfileInfo(playtList)

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


//.........................Императивная работа с коллекциями данных


// const cart = {
//     //Предметы
//     items: [],
//     //Получить предметы
//     getItems() {
//         return this.items
//     },
//     //Прибавлять
//     add(product) {
//         //

//         for(const item of this.items){
//             if(item.name === product.name){
//                 item.quantity += 1
//                 return
//             }
//         }
//         const newProduct = {
//             ...product,
//             quantity: 1

//         }
//         this.items.push(newProduct)
//     },
//     // Степень отдаления
//     remove(productName) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             // console.log(this.items[i])
//             if(productName === this.items[i].name) {
//                 console.log('мы нашли такой продукт ', productName)
//                 console.log(i)
//                 this.items.splice(i, 1)
//             }
//         }
//         // for (const items of this.items){
//         //     if (productName === items.name){
//         //         console.log('мы нашли такой продукт ', productName)
//         //     }
//         // }
//     },
//     clear() {
//         this.items = []
//     },
//     countTotalPrice() {
//         // console.log(this.items)
//         const {items} = this
//         let total = 0
//         for(const{price, quantity} of items){
//             total += price * quantity
//         }
//         // for (const item of this.items) {
            
//         //     total += item.price
//         // }
//         return total
//     },
//      // если продукт уже есть в корзине то эта функция Увеличить количество на 1
//     increaseQuantity(productName) {
        
        
//         for (let item of this.items){
            
//             if (productName === item.name){
                
//                 console.log(`Продукт ${productName} уже есть в корзине!!!`)
//                 item.quantity += 1
//                 item.price *= 2

//             }
            
            
//         }
        
//     },
//     // получает имя продукта ищет его в корзине и Уменьшить количество на 1
//     decreaseQuantity(productName) {
        
//         for (let item of this.items){
            
//             if (productName === item.name){
                
//                 console.log(`Продукт ${productName} уже есть в корзине!!!`)
//                 item.quantity -= 1
//                 item.price /= 2

//             }
//         }
//     },
// }

// console.log(cart.getItems())

// cart.add({name: 'apple', price: 50})
// cart.add({name: 'orange', price: 60})
// cart.add({name: 'cherry', price: 70})
// cart.add({name: 'tomato', price: 100})
// cart.add({name: 'cherry', price: 70})
// cart.add({name: 'tomato', price: 100})

// console.table(cart.getItems())

// console.log('Total: ', cart.countTotalPrice())

// cart.remove('tomato')
// console.table(cart.getItems())

// cart.increaseQuantity('apple')
// cart.increaseQuantity('orange')
// cart.increaseQuantity('cherry')
// console.table(cart.getItems())

// cart.decreaseQuantity('apple')
// cart.decreaseQuantity('orange')
// cart.decreaseQuantity('cherry')
// console.table(cart.getItems())

// cart.clear('apple')
// console.log(cart.getItems())

//--------------------------------------------------------------

// Функция обратного вызова - callback
// Функция может принимать другие функции как параметры;
// Функция которая передается другой функции как аргумент называется -
// функцией обратного вызова (callback - функция);
// Функция которая принимает другую функцию как параметр или возвращает
// функцию как результат своей работы называется - функцией высшего порядка.

//------------------

//============================
// callback - обычная функция которая передается как аргумент в другую функцию

//=============================map

// const name = ['Bobby', 'Peter', 'Phelep']
// const number = [100, 200, 300]

// const map = (arr, callback) => {
//     const result = []
//     for (const elem of arr ) {
//         result.push(callback(elem))
//     }
//     return result
// }

// console.log(map(name, (nameTo) => `<li>${nameTo}</li>`))
// console.log(map(number, (num) => num * 2))

//===========================map

// const arr = [1, 2, 3].map((value) =>`<li>${value}</li>`)
// console.log(arr)
 
//============================filter

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filter = (arr, callback) => {
//     const result = []
//     for (const elem of arr) {
//         if (callback(elem)){
//             result.push(elem)
//         }
        
//     }
//     return result
// }

// console.log(filter(arr1, (value) => value > 5))
// console.log(filter(arr2, (value) => value < 5))
// console.log(filter(arr3, (value) => value % 2 === 0))
// console.log(filter(arr4, (value) => value % 2 !== 0))

//============================reduce

// const arr = [1, 1, 1, 1, 6, 6]

// const reduce = function (arr, callback ,initialValue){
//     let result = initialValue
//     for (const elem of arr){
//        result = callback(result, elem)
//     }
//     return result
// }

// // function sum (a, b) {
// //     return a + b
// // }

// console.log(reduce(arr, (sum, value) => sum + value, 0))
// console.log(reduce(arr, (acc, value) => acc * value, 1))

//==============================


//------------------
// const fnA = function (message, callback){
//     console.log(message)
//     callback(100)
// }
// const fnB = function (number){
//     console.log('Это лог при вызове fnB', number)
// }

// fnA('Hello world', fnB)
//------------------

// const doMach = function(a, b, callback){
//     const resalt = callback(a, b)
//     console.log(resalt)
// }

// const add = function(x, y){
//     return x + y
// }

// doMach(5, 5, add)

//-------------------

// const doMach = function(a, b, callback){
//     const resalt = callback(a, b)
//     console.log(resalt)
// }

// doMach(5, 5, function(x, y){
//     return x + y
// })// второй вариант (одноразовая функция)

//--------------------

// Отложенный вызов: регистрации событий

// const buttnRef = document.querySelector('.js-button')

// const handleBtnClick = function(){
//     console.log('Клик по кнопке'+ Date.now())
// }
// buttnRef.addEventListener('click', handleBtnClick)

//--------------------

// Отложенный вызов: геолокация

// const onGetPjsitionsSuccess = function(position){
//     console.log(position)
// }

// const onGetPjsitionsError = function(error){
//     console.log(error)
// }

// window.navigator.geolocation.getCurrentPosition(
//     onGetPjsitionsSuccess,
//     onGetPjsitionsSuccess,
// )

//--------------------

//Отложенный вызов: интервалы

// const callback = function (){
//     console.log('Через 2 секунды')
// }

// console.log('В коде перед таймаутом')

// setTimeout(callback, 3000)

// console.log('В коде после таймаута')

//------------------------

// Фильтр

//  const filter = function(array, test) {
//     const filteredArray = []
//     for (const el of array){
//         console.log(el)
//         const passed = test(el)
//         if(passed){
//             filteredArray.push(el)
//         }
//     }
//     return filteredArray
//  }

//  const callback1 = function(value){
//     return value >= 3
//  }

//  const callback2 = function(value){
//     return value <= 4
//  }

//  const r1 = filter([1, 2, 3, 4, 5], callback1)
//  console.log(r1)
//  const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2)
//  console.log(r2)

//--------------------

// const filter = function(array, test) {
//     const filteredArray = []
//     for (const el of array){
//         console.log(el)
//         const passed = test(el)
//         if(passed){
//             filteredArray.push(el)
//         }
//     }
//     return filteredArray
//  }

// const fruits = [
//     {name: 'apples', quantity: 200, isFresh: true},
//     {name: 'grapes', quantity: 150, isFresh: false},
//     {name: 'bananas', quantity: 100, isFresh: true},
// ]

// const getFruitsWithQuantity = function(fruit) {
//     return fruit.quantity >= 120
// }
//  const r3 = filter(fruits, getFruitsWithQuantity)
//  console.log(r3)

//----------------------------
//================================
// Замыкание
//================================
// Функция результатом своей работы может возвращать другую функцию

// const fnA = function (parameter) {
//     const innerVariable = 'Значение внутренней переменной функции fnA'

//     const innerFunction =  function(){
//         console.log(parameter)
//         console.log(innerVariable)
//         console.log('Это вызов innerFunction')
//     }
//     return innerFunction
// }

// const fnB = fnA(555)
// fnB()
// console.log(fnB)

//----------------------

// const count = () => {
//     let x = 10 // этот х и называется замкнутая переменная
    
//     return function () {
        
//         console.log(x)
//     }
// }

// const count1 = count()
// console.log(count1())

//-------------------------
// function processCall(recipient) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//       // Логика активации автоответчика
//     } else {
//       console.log(`Соединяем с ${recipient}, ожидайте...`);
//       // Логика принятия звонка
//     }
//   }
  
//   processCall("Манго");

  //-----------------------
//   function processCall(recipient, onAvailable, onNotAvailable) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
//     // Логика принятия звонка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//     // Логика записи голограммы
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Поли", takeCall, leaveHoloMessage);
//-------------------------
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`)
// }

// makeDish('Mango', 'котлеты')
// makeDish('Mango', 'омлет')
// makeDish('Mango', 'чай')

// makeDish('Poly', 'хот-дог')
// makeDish('Poly', 'супик')
// makeDish('Poly', 'кофе')

//----------------------

// const makeSheff = function(name) {
//     const makeDish = function(dish){
//         console.log(`${name} готовит ${dish}`)
//     }
//     return makeDish
// }

// const mango = makeSheff('Mango')
// const poly = makeSheff('Poly')
// mango('котлеты')
// poly('хот-дог')

//-------------------------

// Округление

//------------------------

// const floatingPoint = 3.364287

// const someInt = Math.round(floatingPoint)

// const withDecimals = Number(floatingPoint.toFixed(2))

// console.log(withDecimals)

// console.log(someInt)

//-----------------------

// const floatingPoint = 3.364287

// const rounder = function(number, places) {
//     return Number(number.toFixed(places))
// }

// console.log(rounder(floatingPoint, 2))

//----------------------

// Тоже самое только с замыканием

// const floatingPoint = 3.364287

// const rounder = function(places) {
//     return function (number) {
//         return Number(number.toFixed(places))
//     }
// }
    
// const rounder2 = rounder(2)

// console.log(rounder2(floatingPoint))

//------------------------

// Приватные данные и функции

// const salaryManagerFactory = function (employeeName, baseSalary) {
//     let salary = baseSalary

//     return {
//         raise(amount) {
//             if (amount > 1000){
//                 return 'Ты офигел'
//             }
//             salary += amount
//         },
//         lower(amount) {
//             salary -=amount
//         },
//         current () {
//             return `Текущая зарплата ${employeeName} - ${salary}`
//         }
//     }
// }

// const salaryManager = salaryManagerFactory('by Sasha', 5000)
// // console.log(salaryManager.raise(2000))
// salaryManager.raise(1000)
// console.log(salaryManager.current())

//------------------------

// Стрелочные функции

// const add = function (a, b, c) {
//     return a + b + c
// }

//  console.log(add(5, 4, 2))

// ----------Один вариани
// const add = (a, b, c) => {
//     return a + b + c
// }
// console.log(add(5, 4, 2))

// -----------Второй вариант
// const add = (a, b, c) => a + b + c

//  console.log(add(5, 5, 5))

//------------------------

// const fnA = function () {
//     return {
//         a: 5
//     }
// }
//  console.log(fnA())

//  const fnA = () => ({a: 5}) // 'Объект' в стрелочной функции пишем в круглых скобках!!

// console.log(fnA())

//==================for-each

// const arr = [1, 2, 3, 4, 5]
// arr.forEach(function (number, index, x){
//     console.log(`Индекс - ${index}, Значение - ${number}, и это ${x}`)
// })
//========================THIS=====================
//Неважно как ты объявил функцию(метода объекта)...главное как вызвал

// const petya = {
//     username: "Petya",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.arr);
//     },
//     arr: [1, 2, 3, 4, 5],
//   };

//   petya.showThis()
//   petya.showName()

//==================

// const petya = {
//     username: "Petya",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(`Hello ${this.username}`);
//     },
//     arr: [1, 2, 3, 4, 5],
//   };

//   petya.showName()

//----------------------

// const showTime = function() {
//   console.log(this)
//   console.log(this.tag)
// }

// // Без контекста объекта будет underfined

// const user = {
//   tag: 'Mango',
// }

// user.showUserTag = showTime
// console.log(user)
// user.showUserTag()

//-------------------------

// Тренируемся 1

// const counter = {
//   value:  0,
//   increment(value) {
//     console.log('increment this - ', this)
//     this.value += value
//   },
//   decrement(value) {
//     console.log('decrement this -', this)
//     this.value += value
//   },
// }

//  const updateCounter = function(value, operation){
//   operation(value)
//  }
// updateCounter(10, counter.increment.bind(counter))
// updateCounter(5 , counter.decrement.bind(counter))

//-----------------------------Делаем счетчик


// const counter = {
//   value:  0,
//   increment(value) {
//     console.log('increment this - ', this)
//     this.value += 1
//   },
//   decrement(value) {
//     console.log('decrement this -', this)
//     this.value -= 1
//   },
// }

// const decrementBtn = document.querySelector('.js-decrement')
// console.log(decrementBtn)

// const valueEl = document.querySelector('.js-value')
// console.log(valueEl)

// const incrementBtn = document.querySelector('.js-increment')
// console.log(incrementBtn)

// // decrementBtn.textContent = 'swwnkwhfk'

// decrementBtn.addEventListener('click', function(){
//   console.log('klick')

//   counter.decrement()
//   valueEl.textContent = counter.value
// })

// incrementBtn.addEventListener('click', function(){
//   console.log('klick')

//   counter.increment()

//   valueEl.textContent = counter.value
// })

//-------------------------------------------------------

//=====================Прототип объекта=====================
//  в прототипах все ссылки!!

// const objC = {
//   z: 5,
// }
// console.log(objC)

// const objB = Object.create(objC)
// objB.y = 2
// console.log(objB)

// const objA = Object.create(objB)
// objA.x = 1
// console.log(objA)

//======================

// const Car = function({brand, model, price} = {}){
//     this.brand = brand
//     this.model = model
//     this.price = price
// }

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q7',
//   price: '50000'
// })

// console.log(myCar)

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: '750',
//   price: '40000'
// })

// console.log(myCar2)

//=================

// const User = function({email, password} = {}){
//   this.email = email
//   this.password = password

// }

// console.log(User.prototype)

// User.prototype.changeEmail = function(newMail){
//   this.email = newMail
// }

// const mango = new User({email: '_alex__08@ukr.net', password: 1212121})
// console.log(mango)

// mango.changeEmail('bdbbsvkbv')
// console.log(mango)
// console.log(Math.PI)
<<<<<<< HEAD
//-------------------

// function Account(numbert, amount = 0, currency) {
//   this.numbert = numbert;
//   this.amount = amount;
//   this.currency = currency;

//   this.add = function (value) {
//     this.amount += value;
//   }
//   this.withdrawal = function(value) {
//     this.amount -= value
//   }
// }

// const account_1 = new Account(2323984124, 100, "USD")
// const account2 = new Account(2323934, 1000, "EUR")
// account_1.add(200)
// account2.add(221)
// account2.withdrawal(1000)
// console.log(account_1)
// console.log(account2)

//============DOM====================

























=======
>>>>>>> a947a2c33c556b69a4b24dbda6b2354c3cb4d400


//==============Перебирающие методы=====================

// ----forEach----
// - Поэлементно перебирает оригинальный массив;
// - Ничего не возвращает;
// - Заменяет классический for, если не нужно прерывать цикл.

// const numbers = [5, 10, 15, 20, 25] 
// numbers.forEach(function(number){
//   console.log('number', number)
// })

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const res = [];

// arr1.forEach((value) => {
//   if (arr2.includes(value)){
//     res.push(value)
//   }
// })
// console.log(res)// [2, 3]

// ----map----

// - Поэлементно перебирает оригинальный массив;
// - Не изменяет оригинальный массив
// - Ничего не возвращает;
// - Возвращает новый массив такой же длины.

// const numbers = [5, 10, 15, 20, 25]
// const hello = numbers.map(function(number){
//   console.log(number)
//   return number * 2
// })
// console.log(hello)

//======

// const numbers = [2, 3, 4]
// const res = numbers.map(function(number){
//   return number * 2
// })
// console.log(res)// [4, 6, 8]
//--------------

// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]

// const playerNames = players.map( palyer  => palyer.name)

// console.log(playerNames)

// ----filter----
// - Поэлементно перебирает оригинальный массив;
// - Возвращает новый массив (с элементами или пустой)
// - Добавляет в возвращаемый массив элементы которые удовлетворяют условию
// коллбек-функции
// - если коллбек вернул true элемент добавляется в возвращаемый массив
// - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив

// const numbers = [5, 10, 15, 20, 25]
// const filterNum = numbers.filter(number => {
//   return number < 15
// })
// console.log(filterNum) 

// const names = ['Bobby', 'Chris','Bobby', 'Piter', 'Jon', 'Jon']
// const uniqueNames = names.filter((name, idx, array) => array.indexOf(name) === idx)
// console.log(uniqueNames)// ['Bobby', 'Chris', 'Piter', 'Jon']


// ----find----
// - Элемент перебирает оригинальный массив
// - Возвращает первый элемент удовлетворяющий условию или undefined

// - используется для поиска уникльных элементов

// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find(number => number > 10)
// console.log(number)// 15
//-----------

// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]
// const playerIdToFind = 'player-3';

// const playerWithId = players.find(player => player.id === playerIdToFind)
// console.log(playerWithId)

// ----every()----
// - Поэлементно перебирает оригинальный массив;
// - Возвращает true если все элементы массива удовлетворяют условию

// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]

// const isAllOnline = players.every(player => player.online)
// console.log(isAllOnline) // false



// ----some()----
// - Поэлементно перебирает оригинальный массив;
// - Возвращает true если хотябы один элемент массива удовлетворяют условию

// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]

// const isAllOnline = players.some(player => player.online)
// console.log(isAllOnline) // true

// ----.reduce()----

// - Поэлементно перебирает оригинальный массив;
// - Возвращает что угодно
// - Заменяет все на свете, но использовать нужно с умом

// const numbers = [5, 10, 15, 20, 25]
// const total = numbers.reduce((acc, number) => {
// return acc + number
// },  0)
// console.log(total)// 75

//---------

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150, 
// };

// const totalSalary = Object.values(salary).reduce((total, salary) => total + salary, 0,)
// console.log(totalSalary)// 300

//-----------

// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]

// const totalTimePlayeds = players.reduce((total, time) => total + time.timePlayed, 0)
// console.log(totalTimePlayeds) // 1240

//---------- 

// Считаем общую сумму товаров корзины

// const card = [
//   {label: 'Apples', price: 100, quantity: 2},
//   {label: 'Bananas', price: 120, quantity: 3},
//   {label: 'Lemons', price: 70, quantity: 4},
// ]

// const totalAmount = card.reduce((acc, items) => acc + items.price * items.quantity, 0)
// console.log(totalAmount) // 840

//----------

// Собираем все теги из твитов

// const tweets = [
//   {id: '000', likes: 5, tage: ['js', 'nodejs']},
//   {id: '001', likes: 2, tage: ['html', 'css']},
//   {id: '002', likes: 17, tage: ['html', 'js', 'nodejs']},
//   {id: '003', likes: 8, tage: ['css', 'react']},
//   {id: '004', likes: 0, tage: ['js', 'nodejs', 'react']},
// ]

// const allTags = tweets.reduce((tags, tweet) =>  {
//   // tags.push(...tweet.tage)
//   // return tags
//   return[...tags, ...tweet.tage]// - современный синтаксис
// }, [] )
// console.log(allTags)

// const tagsStats = allTags.reduce((acc, tag) => {
//   // Если свойство с ключом tag есть - увеличить его значение на 1
//   if(acc[tag]){
//     acc[tag] += 1
//     return acc
//   }
//   // Если свойства нет с таким ключом что в tag, сделать и записать 1
//   acc[tag] = 1
//   return acc
// }, {})
// console.log(tagsStats)

//------------

// const numbers = [1, 1, 1, 1, 1, 1, 1]
// const sum = numbers.reduce((acc, value) => {
//   return acc +value
// }, 0)
// console.log(sum)

// const numbers2 = [-3, -5, 0, 5]
// const max = numbers2.reduce((acc, value) => (value > acc ? value : acc), 0)
// console.log(max)// 5
//=======

// const min = numbers2.reduce((acc, value) => (value < acc ? value : acc), 0)
// console.log(min)// -5

//=========

// const text = 'abc abc d eeeeee'
// const res = text.split('').reduce((acc, letter) => {
//   return {
//     ...acc,
//     [letter]: acc[letter] ? acc[letter] + 1 : 1
//   }

// }, {})
// console.log(res)

//============


// ----.sort()----
// - Сортирует по возрастагию
// - Приводят элементы к строке

// const numbers = [1, 9, 6, 2, 3]
// numbers.sort()
// console.log(numbers)// [1, 2, 3, 6, 9]

//--------

// const letters = ['b', 'B', 'a', 'A']
// letters.sort()
// console.log(letters)// ['A', 'B', 'a', 'b']

//----------

// const numbers = [1, 9, 6, 2, 3]

// numbers.sort((curEl, nextEl) => nextEl - curEl)
// console.log(numbers)// [9, 6, 3, 2, 1]
//------

// const numbers = [1, 9, 6, 2, 3]
// const copy = [...numbers]
// copy.sort()
// console.log(copy) // копия [1, 2, 3, 6, 9]

//------------

// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]

// const sortedByBestPlayers = [...players].sort((timeStartEl, timeEndEl) => {
//   return timeStartEl.timePlayed - timeEndEl.timePlayed
// })
// console.log(sortedByBestPlayers)

// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]

// const byName = [...players].sort((nameStart, nameEnd) => {
//   const result = nameStart.name[0] > nameEnd.name[0]
//   if(result){
//     return 1
//   }
//   if(!result){
//     return -1
//   }
// })
// console.log(byName)

//------.flat()---------
// - Разглаживает массив до нужной глубины
// - По умолчанию глубина 1
// const arrey = [1, 2, [4, [5]], [6, [7, 8, [9]]]]

// console.log(arrey.flat(3))// [1, 2, 4, 5, 6, 7, 8, 9]

//------.flatMap()---------
// - Комбинация map + flat

// const tweets = [
//   {id: '000', likes: 5, tage: ['js', 'nodejs']},
//   {id: '001', likes: 2, tage: ['html', 'css']},
//   {id: '002', likes: 17, tage: ['html', 'js', 'nodejs']},
//   {id: '003', likes: 8, tage: ['css', 'react']},
//   {id: '004', likes: 0, tage: ['js', 'nodejs', 'react']},
// ]

// const tags = tweets.flatMap((t) => t.tage)
// console.log(tags)// ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css',
// 'react', 'js', 'nodejs', 'react']

//------цепочки вызовов - chaining-------//

// const numbers = [1, 5, 2, 4, 3]

// const sorted = numbers.filter(num => num > 2).map(num => num * 3).sort((a, b) => a - b)
// console.log(sorted) // [9, 12, 15]

//---------

// const players = [
//   {id: 'id-1', tag: ['Mango'], isOnline: true, rank: 800},
//   {id: 'id-2', tag: ['Poly'], isOnline: false, rank: 600},
//   {id: 'id-3', tag: ['Ajax'], isOnline: true, rank: 100},
//   {id: 'id-4', tag: ['Kiwi'], isOnline: true, rank: 400},  
// ]

// const onlineAndSorted = players
// .filter(player => player.isOnline)
// .sort((a, b) => b.rank - a.rank)
// console.table(onlineAndSorted) 
//---------

//=====LODASH====== - библиотека методов(объект с методами, подключается 
// через файлик скрипта)
// console.dir(_)

// console.log(_.isEmpty({}))

// console.log(_.isEmpty({a: 1}))

//  const user = {
//   name: 'Mango',
//   location: {
//     coords: [1, 2],
//     city: 'Lviv'
//   }
//  }
// метод get
//console.log(_.get(user, 'location.city'))// Lviv

//console.log(user?.location?.city) // - новый метод

// метод union()
// console.log(_.union([1, 2, 3], [3, 4, 5]))//[1, 2, 3, 4, 5]

// метод range()
//console.log(_.range(1, 6))// [1, 2, 3, 4, 5]

// метод sortBy()
// const users = [
//   { 'user': 'fred',   'age': 48 },
//   { 'user': 'barney', 'age': 36 },
//   { 'user': 'fred',   'age': 40 },
//   { 'user': 'barney', 'age': 34 }
// ];

// console.log(_.sortBy(users, user => user.age))
// console.log(_.sortBy(users, ['user', 'age']))

// метод _.sum()
// console.log(_.sum([1, 2, 3, 4, 5])) // 15

// метод _.sumBy()
// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]

// console.log(_.sumBy(players, player => player.timePlayed)) //1240

// метод _.uniq() and uniqBy()

// метод _.random()

// метод min() and max()

// метод minBy() and maxBy()
// const players = [
//   {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//   {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//   {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//   {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//   {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},    
// ]

// console.log(_.minBy(players, player => player.timePlayed)) // худший игрок

// методы camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
//============

const ul = document.querySelector('ul')

const books = ['HP', 'Max Fry', 'Robinson', 'Tom Sawyer']

const list = books.map((book) => `<li>${book}</li>`)

ul.insertAdjacentHTML('beforeend', list.join(''))










