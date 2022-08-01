// 1. У вас есть переменная a = ’34’.
// Написать все варианты перевода типа данных на число.

a = '34'

// console.log(Math.floor(a))
// console.log(Math.ceil(a))
// console.log(Math.round(a))
// console.log(Math.trunc(a))
console.log(parseFloat(a))
console.log(parseInt(a))


// 2. У вас есть переменная b = 29.92
//     Написать все варинты округления и задать комментарий с описанием работы данного варианта.

b = 29.92

console.log(Math.floor(b))
// Округление в меньшую сторону
console.log(Math.ceil(b))
// Округление в большую сторону
console.log(Math.round(b))
// Округление до ближайшего целого
console.log(Math.trunc(b))
// Производит удаление дробной части без округления


// 3. Получить рандомное число от 1 - 10 , 30 - 90, 200 -500.

console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil( Math.random()* 60 )+ 30)
console.log(Math.ceil(Math.random() *300) + 200)

// 4. У вас есть переменная c = ‘aBRAcADBRA’.
// Написать метод для изменения регистра строки.
c = 'aBRAcADBRA'

console.log(c.toUpperCase())
console.log(c.toLowerCase())



// 5. У вас есть переменная d = ‘Hello world’.
// В консоль вывести первый, второй , предпоследний и последний символ.
d = 'Hello world'
console.log(d[0])
console.log(d[1])
console.log(d[d.length -1])
console.log(d[d.length -2])


// 6. У вас есть переменная e = ‘Hello world’.
// В консоль вывести длину данной строки.
e = 'Hello world'
console.log(e.length)
// 7. У вас есть переменная f = ‘abracaDabra’.
// Написать все варианты поиска подстроки и задать комментарий с описанием данного варианта.
f = 'abracaDabra'
console.log(f.indexOf('Da'))



// 8. У вас есть переменная g = ‘Propagination’.
// Написать все варианты получения подстроки и задать комментарий с описанием данного варианта.

g = 'Propagination'


console.log(g.slice(8))
// Возвращает часть строки от start до (не включая) end.
console.log(g.substr(2, 4))
// Возвращает часть строки от start длины length.


