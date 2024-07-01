$(".main>li").mouseover(function(){
	$(this).children(".sub").stop().slideDown();
});
$(".main>li").mouseleave(function(){
	$(this).children(".sub").stop().slideUp();
});
$(".main_2>li").mouseover(function(){
	$(this).children(".sub_2").stop().slideDown();
});
$(".main_2>li").mouseleave(function(){
	$(this).children(".sub_2").stop().slideUp();
});
start();
var imgs=5;
var now = 0;

function start(){
	$(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
	setInterval(function(){slide();},2000);
}

function slide(){
	now = now ==imgs?0:now+=1;
	$(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
	$(".imgs>img").eq(now).css({"margin-left":"0px"});
}


function winOpen1(){
	var win1 = window.open('login.html','child1','toolbar = no,location = no, staus = no, menubar = no, resizable = no,scrolbars=no, width=700,height = 700')
}

function winOpen2(){
	var win2 = window.open('join.html','child2','toolbar = no,location = no, staus = no, menubar = no, resizable = no,scrolbars=no, width=700,height = 700')
}