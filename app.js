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

const wallet = {
    name: 'Alex',
    btc: {
        name: 'Bitcoin',
        logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'>",
        rate: '708868.69',
        coin:'54'
    },
    ehr: {
        name: 'Ethereum',
        logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'>",
        rate: '47855.34',
        coin:'27'
    },
    xlm: {
        name: 'Stellar',
        logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/512.png'>",
        rate: '4.16',
        coin:'37'
    },
    show: function (nameCoine) {
        document.getElementById('wallet').innerHTML = `Добрый день, ${wallet.name}! На вашем 
        балансе ${wallet[nameCoine].name} ${wallet[nameCoine].logo} осталось ${wallet[nameCoine].coin} могет, 
        если вы сегодня продадите их то, получите ${(wallet[nameCoine].rate*wallet[nameCoine].coin*31).toFixed(2)} грн.`
    }
}
wallet.show(prompt('Введіть назви монет:','btc,ehr,xlm'))



