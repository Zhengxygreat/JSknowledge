console.log(typeof Math);//=>'object'
console.dir(Math)
// Math = {
// PI:3.1415926...
// abs:function(){[native code]}
//...
// }

//Math.abs();

//Math常用的属性和方法
Math.abs([number value])  //获取绝对值，永远是整数或者0
//传递的不是数字类型的值：先基于Number()转换再处理