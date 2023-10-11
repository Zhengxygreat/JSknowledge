let box = document.getElementById('box');
//标准浏览器（非IE6-8）中会把空格和换行当做文本节点处理
// childNodes获取的是所有节点
// console.log(box.childNodes)

//只想要元素节点，（但是IE6-8）中会把注释节点也当做元素节点，即IE6-8中不兼容
// console.log(box.children)


/*
children:获取指定上下文中，所有的元素子节点
@params:context[element object]指定的上下文元素信息
@return:[array]返回所有的元素子节点集合
by joanna
*/
function children(context) {
  //1、先获取所有的子节点
  var res = [],
    nodeList = context.childNodes;
  //2、循环遍历所有的子节点，找出元素子节点(nodeType===1)，存储到res中即可
  for (var i = 0; i < nodeList.length; i++){
    var item = nodeList[i];
    item.nodeType === 1 ? res.push(item) : null;
  }
  return res;
}
console.log(children(box))