function addLoadEvent(moving){
	var oldonload=window.onload;
	if (typeof window.onload !="function"){
		window.onload=moving;
	    }
	else{
		window.onload=function(){
			oldonload();
			moving();
		 } 
	}
}