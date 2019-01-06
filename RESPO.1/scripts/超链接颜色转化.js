
// 超链接颜色转换
function changcolor1(){
	document.bgColor="blue";   // 文档的背景色
    document.vlinkColor="white";// 已经浏览过的超链接颜色
    document.linkColor="yellow";// 超链接的颜色
    document.alinkColor="red";// 激活超链接的颜色
}
function changcolor2(){
    document.bgColor="red";   // 文档的背景色
    document.vlinkColor="blue";// 已经浏览过的超链接颜色
    document.linkColor="white";// 超链接的颜色
    document.alinkColor="yellow";// 激活超链接的颜色	
}
setInterval("changcolor1()",200);
setInterval("changcolor2()",100);