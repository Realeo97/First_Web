//                    头像

// var c=document.getElementById("myCanvas");
// var img=new Image();
// img.src="touxiang.png" ;
// var ctx=c.getContext("2d");
// ctx.beginPath();
// ctx.arc(60,60,60,0,2*Math.PI);
// ctx.stroke();
// ctx.clip();
// img.onload=function(){
// 	ctx.drawImage(img,-5,-5);
// }


              // 超链接颜色转换
function changcolor(){
	var red = Math.ceil(Math.random()*255);
	var green = Math.ceil(Math.random()*255);
	var blue = Math.ceil(Math.random()*255);
	var color = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    document.bgColor="blue";   // 文档的背景色
    document.vlinkColor=color;// 已经浏览过的超链接颜色
    document.linkColor="yellow";// 超链接的颜色
    document.alinkColor="red";// 激活超链接的颜色
}
setInterval("changcolor()",1000);


                  // 日期
function Date1(){
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth();
	var day = myDate.getDate();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var second = myDate.getSeconds();
	var week = myDate.getDay();
	var str = "当前日期："+year+"年"+(month+1)+"月";
	str += day+"日"+hour+":"+minute+":"+second+":";
	str += "今天是：星期"+week;
	var date=document.getElementById("Date");
	date.style.position = "absolute";
	date.style.right = "50px";
	date.style.bottom = "5px";
	date.style.fontSize = "0.5em";
	date.style.color = "red";
	date.innerText = str;
}
setInterval(Date1,500);
                   // menu动画
document.addEventListener("scroll",function(){
if(window.scrollY>=100){
  $(document).ready(function(){
 	$(".menu-top").fadeOut("slow");
    $(".menu").fadeIn("slow");
     })
	 }
if(window.scrollY<=100){
  $(document).ready(function(){
 	$(".menu-top").fadeIn("slow");
    $(".menu").fadeOut("slow");
     })
	 }	 
 })

//                  Title动画
$(document).ready(function(){
 	$(".respo").animate({left:"100px"},"slow");
 })


//                   Body1动态
document.addEventListener("scroll",function(){
if(window.scrollY>=400){
  $(document).ready(function(){
 	$(".title-1").fadeIn("slow");
     })
  }
  if(window.scrollY>=700){
  $(document).ready(function(){
  	$(".pic-1").animate({left:"130px"},"slow");
 	$(".content-1").animate({left:"180px"},"slow");
  	 })
  }
})
//            Body2动态
document.addEventListener("scroll",function(){
if(window.scrollY>=1300){
  $(document).ready(function(){
 	$(".title-2").fadeIn("slow");
     })
  }
  if(window.scrollY>=1600){
  $(document).ready(function(){
  	$(".content-2-left").animate({left:"0px"},"slow");
 	$(".content-2-right").animate({left:"0px"},"slow");
  	 })
  }
})
                   // Body3动画
document.addEventListener("scroll",function(){
if(window.scrollY>=2100){
  $(document).ready(function(){
 	$(".title-3").fadeIn("slow");
     })
	 }
 })

                    // Body4动画
document.addEventListener("scroll",function(){
if(window.scrollY>=2800){
  $(document).ready(function(){
 	$(".title-4").fadeIn("slow");
     })
  }
  if(window.scrollY>=3100){
  $(document).ready(function(){
  	$(".content-4-p-left").animate({left:"0px"},"slow");
  	$(".content-4-p-center").animate({top:"0px"},"slow");
 	$(".content-4-p-right").animate({left:"0px"},"slow");
  	 })
  }
})
                  // Body5动画
document.addEventListener("scroll",function(){
if(window.scrollY>=3900){
  $(document).ready(function(){
 	$(".title-5").fadeIn("slow");
     })
  }
  if(window.scrollY>=4100){
  $(document).ready(function(){
  	$(".content-5-left").animate({left:"0px"},"slow");
  	$(".content-5-center").animate({top:"0px"},"slow");
 	$(".content-5-right").animate({left:"0px"},"slow");
  	 })
  }
})
                   // Body6动画
document.addEventListener("scroll",function(){
if(window.scrollY>=4900){
  $(document).ready(function(){
 	$(".title-6").fadeIn("slow");
     })
	 }
 })
                  // Body7动画
document.addEventListener("scroll",function(){
if(window.scrollY>=5500){
  $(document).ready(function(){
 	$(".title-7").fadeIn("slow");
     })
  }
  if(window.scrollY>=5600){
  $(document).ready(function(){
  	$(".content-7").animate({left:"0px"},"slow");
  	 })
  }
})

 

              // 元素宽度动态
$(document).ready(function(){
	$("#cicle1").mouseover(function(){
		$("#yuan1").animate({width:"100px"},"slow");})
	$("#cicle1").mouseout(function(){
		$("#yuan1").animate({width:"0px"},"slow");})
	})

$(document).ready(function(){
	$("#cicle2").mouseover(function(){
		$("#yuan2").animate({width:"100px"},"slow");})
	$("#cicle2").mouseout(function(){
		$("#yuan2").animate({width:"0px"},"slow");})
    })

$(document).ready(function(){
	$("#cicle3").mouseover(function(){
		$("#yuan3").animate({width:"100px"},"slow");})
	$("#cicle3").mouseout(function(){
		$("#yuan3").animate({width:"0px"},"slow");})
})

$(document).ready(function(){
	$("#cicle4").mouseover(function(){
		$("#yuan4").animate({width:"100px"},"slow");})
	$("#cicle4").mouseout(function(){
		$("#yuan4").animate({width:"0px"},"slow");})
})

$(document).ready(function(){
	$("#cicle5").mouseover(function(){
		$("#yuan5").animate({width:"100px"},"slow");})
	$("#cicle5").mouseout(function(){
		$("#yuan5").animate({width:"0px"},"slow");})
})

$(document).ready(function(){
	$("#cicle6").mouseover(function(){
		$("#yuan6").animate({width:"100px"},"slow");})
	$("#cicle6").mouseout(function(){
		$("#yuan6").animate({width:"0px"},"slow");})
})

$(document).ready(function(){
	$(".a7").mouseover(function(){
		$("#yuan7").animate({width:"100px"},"slow");})
	$(".a7").mouseout(function(){
		$("#yuan7").animate({width:"0px"},"slow");})
})

$(document).ready(function(){
	var numa1 = $(".a1").length;
	var i = 0;
	$(".pictoleft").click(function(){
	  i=0;
	  $(".a1").animate({left:"-0px"},"slow","linear");
   })
	$(".pictoright").click(function(){
	  i=3;
	  $(".a1").animate({left:"-1011px"},"slow","linear");
   })
	function cicle(){
		if (i == numa1-3) {
			i = 0;
		}
		var goLeft=i*337;
		$(".a1").animate({left:"-"+goLeft+"px"},"slow","linear");
		i++;
	}
	setInterval(cicle,2000);
})


//                       轮播2
$(document).ready(function(){	
var numcontent = $(".content-6").length;
	var i = 0;
	$(".toleft").click(function(){
	  i=0;
	  $(".content-6").animate({left:"-0px"},"slow","linear");
   })
	$(".tocenter").click(function(){
	  i=1;
	  $(".content-6").animate({left:"-1350px"},"slow","linear");
   })
	$(".toright").click(function(){
	  i=2;
	  $(".content-6").animate({left:"-2700px"},"slow","linear");
   })
	function circle(){
		if (i == numcontent) {
			i = 0;
		}
		var goLeft=i*1350;
		$(".content-6").animate({left:"-"+goLeft+"px"},"slow","linear");
		i++;
	}
	setInterval(circle,3000);
})



