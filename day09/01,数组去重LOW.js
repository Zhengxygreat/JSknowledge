let ary = [1, 2, 3, 1, 2, 2, 4, 2, 1, 2, 3]
/*
*方案一:
* 循环原有数组中的每一项，每拿到一项都往新数组中添加
  添加之前验证新数组中是否存在这一项，不存在再增加
*/
// let newAry = [];
// for (let i = 0; i < ary.length; i++){
//   let item = ary[i];
//   if (newAry.includes(item)) {
//     continue;
//   }
//   newAry.push(item)
// }
// console.log(newAry)

//方案一的优化写法
// let newAry = []
// ary.forEach(item => {
//   if (newAry.includes(item)) return;
//   newAry.push(item)
// })
// console.log(newAry)

/*
方案二：
  循环原来数组中的每一项
    1、每一次拿出来的值都和它后面的每一项做比较，比较过程中遇到一项和自己相同的，把这一项从数组中直接删除=》splice
    此方法不用includes/indexof（这样保证兼容性）
    */
// for (var i = 0; i < ary.length; i++){
//   //item:每一次循环拿出来的当前项
//   //i:是当前项的索引
//   //itemBack: 当前项后面所有内容（新数组）
//   var item = ary[i];
//   // var itemBack = ary.slice(i+1)
//   //当前项和后面的每一项进行比较
//   for (var j = i + 1; j < ary.length; j++){
//     //compare 是后面要比较的每一项
//     var compare = ary[j];
//     //如果compare 和item相等，则重复，删除
//     if (compare === item) {
//       //j索引这一项从数组中删除
//       ary.splice(j, 1);
//       //数组塌陷了：j后面的每一项索引都提前了一位，下一次要比较的应该还是j这个索引的内容。
//       j--
//     }
//   }
  
// }
// console.log(ary);
//方案二没有实现效果，因为数组塌陷问题；解决数组塌陷：先j--再j++

// for (var i = 0; i < ary.length; i++){
//   var item = ary[i];
//   for (var j = i + 1; j < ary.length; j++){
//     var compare = ary[j];
//     if (compare === item) {
//       ary.splice(j, 1);
//       j--;
//     }
//   }
// }
// console.log(ary);

/*
方案三：
1、创建一个空对象
2、循环数组中的每一项，把每一项向对象中进行存储 =》item :item
3、每一次存储之前进行判断：验证obj中是否存在这一项
基于splice实现删除性能不好：当前项被删除后，后面所有项要向前提一位，如果后面内容过多，一定影响性能。
*/
// let obj = {}
// for (let i = 0; i < ary.length; i++){
//   let item = ary[i];
//   if (obj[item] !== undefined) {
//     //已经存在了
//     ary.splice(i, 1)
//     i--
//     continue;
//   }
//   obj[item] = item
// }
// console.log(ary);

//优化

/*
//unique:实现数组去重的方法
//@params:ary
//return：去重后的数组
by joannazheng
*/

function unique(ary) {
  let obj = {}
  for (let i = 0; i < ary.length; i++){
    let item = ary[i];
    if (obj[item] !== undefined) {
      ary[i] = ary[ary.length - 1];
      ary.length--;
      i--;
      continue;
    }
    obj[item] = item
  }
  return ary;
}
// let obj = {}
// for (let i = 0; i < ary.length; i++){
//   let item = ary[i];
//   if (obj[item] !== undefined) {
//     //已经存在了

//     //如果存在了，让最后一项替换存在的这一项，，然后ary.length--，去除最后一项
//     ary[i] = ary[ary.length - 1];
//     ary.length--
//     i--
//     continue;
//   }
//   obj[item] = item
// }
console.log(unique(ary));

//基于ES6的Set（对应的Map）实现去重
var ary2 = [1, 2, 3, 2, 1, 2, 4, 5]
ary2 = [...new Set(ary2)];
console.log(ary2)