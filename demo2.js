$(function(){
	var timer = null;
	 $("#changeColor").click(function(){
		//var r = Math.floor(praseInt(Math.random()*255));
		//var g = Math.floor(praseInt(Math.random()*255));
		//var b = Math.floor(praseInt(Math.random()*255));
		//alert("r:"+r+"--g:"+g+"--b:"+b);
		//alert(Math.random());
		//fun();
		clearInterval(timer);

	});
	 $(".scc").click(function(){
	 	timer = setInterval(fun,1000);
	 });

	var fun = function(){
	 	var r = Math.floor((Math.random() * 255 ));
		var g = Math.floor((Math.random() * 255 ));
		var b = Math.floor((Math.random() * 255 ));
		var rx = r.toString(16);
		var gx = g.toString(16);
		var bx = b.toString(16);
		//console.log("length::::"+rx.length);
		if(rx.length==1){
			rx = "0" + rx;
		}
		if(gx.length==1){
			gx = "0" + gx;
		}
		if(bx.length==1){
			bx = "0" + bx;
		}
		var rgb = "#"+rx.toString(16)+gx.toString(16)+bx.toString(16);
		//console.log(rgb);
		$(".js1").css("background",rgb);
		//$(".one1").css("background",rgb);
		$(".one2").css("background",rgb);
		//$(".one3").css("background",rgb);
	 };
	 var i = 0;
	 var func = function(){
	 	console.log(i++);
	 }
	//setTimeout(func,0);
	//var timer = setInterval(fun,1000);
	//clearInterval(timer);停止函数

});