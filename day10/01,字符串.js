let time = '2023-10-9 15:27:40'
  //变为2023年10月09日 15时27分40秒
  //2019年10月09日

  //方案一：用replace替换
  // time = time.replace('-', '年').replace('-', '月').replace(' ', '日').replace(':', '时').replace(':', '分') + '秒'
  // console.log(time);

  //方案二：获取到年月日。。这几个值后，相拼成什么就拼什么
  // let n = time.indexOf('-');
  // let m = time.lastIndexOf('-');
  // let x = time.indexOf(' ');
  // let y = time.indexOf(':');
  // let z = time.lastIndexOf(':');
  // let year = time.substring(0, n);
  // let month = time.substring(n + 1, m);
  // let day = time.substring(m + 1, x);
  // console.log(year,month,day)
  //获取值第二中方法
  // let n = time.split(' ');
  // let m = n[0].split('-');
  // let x = n[1].split(':')
// console.log(x);

//正则表达式：
// let addZero = val => {
//   if (var.length< 2) {
//     var = '0'+val
//   }
//   return val
// }

let addZero = val => val.length<2 ? '0'+val : val;
  let ary = time.split(/(?: |-|:)/g);
  time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
  console.log(time);