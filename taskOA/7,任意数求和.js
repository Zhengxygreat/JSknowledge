function sum() {
  let total = null
  for (let i = 0; i < arguments.length; i++){
    //获取的每一项的结果都要先转换为数字（数字运算）
    let item = Number(arguments[i]);
    //非有效数字不加
    if (isNaN(item)) {
      continue
    }
    total += item;
  }
  return total;
}
let total = sum(10, 20, 30, 40)
console.log(total)

let total2 = sum(10, 20, '30')
console.log(total)

let total3 = sum(10, 20,)
console.log(total)

let total4 = sum(10, 20, AA)
console.log(total)