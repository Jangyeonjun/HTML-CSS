



$(".main>li").mouseover(function () {
	$(this).children(".sub").stop().slideDown();
});
$(".main>li").mouseleave(function () {
	$(this).children(".sub").stop().slideUp();
});

start();
var imgs = 5;
var now = 0;




function winOpen1() {
	var win1 = window.open('login.html', 'child1', 'toolbar = no,location = no, staus = no, menubar = no, resizable = no,scrolbars=no, width=700,height = 700')
}

function winOpen2() {
	var win2 = window.open('join.html', 'child2', 'toolbar = no,location = no, staus = no, menubar = no, resizable = no,scrolbars=no, width=700,height = 700')
}