// 动画
function moveElement(elementID,final_x,final_y,interval) {
  //浏览器判断 
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID))return false;
  // 获取元素ID
  var elem = document.getElementById(elementID);
  // 获取整数值
  if (elem.movement) {
    claearTimeout(elem.movement);
  }
  // 优化动画
  if (!elem.style.left) { 
      elem.style.left = "0px";
  }
  if (!elem.style.top) {elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  // 程序控制主体
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
    if (xpos<final_x) {
      xpos++;
    } 
    if (xpos>final_x) {
      xpos--;
    }
    if (ypos<final_y) {
      ypos++;
    }
    if (ypos>final_y) {
      ypos--;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos+"px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    // 设置程序执行时间
    movment = setTimeout(repeat,interval);
}