//获取一个URL地址问号后面传递的参数信息
let url = 'http://www.zhufengpeixun.cn/index.html?1x = 1 & name=zhufeng & teacher=aaa#box'
/*
结果：{
  1x:1,
  name:'zhufeng,
  teacher:'aaa',
  HASH:'box'
}*/
// let askIndex = url.indexOf('?');
// let wellIndex = url.indexOf('#');
// let askText = url.substring(askIndex + 1, wellIndex);
// let wellText = url.substring(wellIndex);
// let result = {};
// let askAry = askText.split('&');
// askAry.forEach(item => {
//   let n = item.split('=');
//   let key = n[0];
//   let value = n[1];
//   result[key] = value;
// });
// result['HSAH'] = wellText;
// console.log(result)
//获取？后面的值
// let askIndex = url.indexOf('?');
// let wellIndex = url.indexOf('#');
// let askText = url.substring(askIndex + 1, wellIndex);
// let wellText = url.substring(wellIndex + 1);
// // console.log(askText, wellText);
// //?后面值的详细处理
// let result = {};
// let askAry = askText.split('&');
// // ['1x=1', 'name=zhufeng', 'teacher=aaa']
// askAry.forEach(item => {
//   let n = item.split('=');
//   let key = n[0];
//   let value = n[1];
//   result[key] = value;
// });
// result['HASH']=wellText
// console.log(result);

//对以上方法进行封装:获取URL地址中问号传參的信息和哈希值的获取
/*
//@params
  //url[string]要解析的URL字符串
//@return
  //[object]包含参数和哈希值信息的对象
by joanna on 2023/10/09
*/
  
// function queryURLParams(url) {
//   let askIndex = url.indexOf('?'),
//       wellIndex = url.indexOf('#'),
//       askText = '',
//       wellText = '';
//   //#不存在
//   wellIndex === -1 ? wellIndex = url.length : null;
//   //?存在
//   askIndex >= 0 ? askText = url.substring(askIndex + 1, wellIndex) : null;
//   wellText = url.substring(wellIndex + 1);
//   //获取每一部分信息
//   let result = {};
//   wellText !== '' ? result[HASH] = wellText : null;
//   if (askText !== '') {
//     let askAry = askText.split('&');
//     askAry.forEach(item => {
//       let itemAry = item.split('=');
//       result[itemAry[0]] = itemAry[1];
//     })

//   }
//   return result;
// }

function queryURLParams(url) {
  let askIndex = url.indexof('?'),
      wellIndex = url.indexof('#'),
      askText = '',
      wellText = '';
  //#不存在
  wellIndex === -1 ? wellIndex = url.length : null;
  //?存在
  askIndex >= 0 ? askText = url.substring(askIndex + 1, wellIndex) : null;
  wellText = url.substring(wellIndex + 1);
  let result = {};
  wellIndex !== '' ? result[HASH] = wellIndex : null;
  if (askText !== '') {
    let askAry = askText.split('&');
    askAry.forEach(item => {
      let itemAry = item.split('=');
      result[itemAry[0]] = itemAry[1];
    })
  }
}
let paramsObj = queryURLParams(url);
console.log(paramsObj)