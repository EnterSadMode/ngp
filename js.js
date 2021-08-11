Задача:
У вас есть массив с целыми числами, в том числе и отрицательными, вам нужно найти самое большое произведение 3 чисел из этого массива. Задание нужно выполнить максимально эффективно, не забывая про отрицательные числа.
Например: у вас есть массив list_of_ints, содержащий числа -10, -10, 1, 3, 2. Функция, которая обрабатывает этот массив, должна вернуть 300, так как -10 * -10 * 3 = 300.





const loi = [-10, -10, 1, 3, 2];


loi.sort((a,b) => a - b);
let lastindex = loi[loi.length - 1]

let res = loi[0]*loi[1]*lastindex
 
let newLoi = loi.slice(-3)

let res2 = newLoi[0]*newLoi[1]*newLoi[2]
function res3(a, b) {
    return a < b ? b : a
    }
console.log(loi)
console.log(newLoi)
console.log(res3(res, res2))










