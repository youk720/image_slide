// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
console.log("test sentence of hello world"); //

$(document).ready(function(){
  //文字のcssをjqueryで適用させる
  $("#test").css("color", "#38b48b");
  $("#top_sentence").css({
    'color':"#00CCFF",
    'font-size':'30px'
  });

let size = 0;
let slideNum = 0;
let xwidth = $('div#slider').width();
let timerID;
$('.flex-control-nav.flex-control-paging li').on('click', function(){
	let index = $('.flex-control-nav.flex-control-paging li').index(this);
	$('.flex-control-nav.flex-control-paging').find('li a').removeClass('flex-active');
	$(this).find('a').addClass('flex-active');

	let slideX = xwidth * index;
	let traStr = 'translate3d(-'+slideX+'px,0,0)'

	$('.slider-image').css({
		'-webkit-transform':traStr,
	});

});
$(function(){
	size = $('.flex-control-nav.flex-control-paging li').length;
	    setTimeout('slide()'); //アニメーションを実行
	});

function slide() {
    if(slideNum == size){slideNum=0;}
	let slideX = xwidth * slideNum;
	let traStr = 'translate3d(-'+slideX+'px,0,0)'
	$('.flex-control-nav.flex-control-paging').find('li a').removeClass('flex-active');
	$('.flex-control-nav.flex-control-paging li a').eq(slideNum).addClass('flex-active');

	$('.slider-image').css({
		'-webkit-transform':traStr,
	});
	slideNum++;
    timerID = setTimeout('slide()', 6000); //アニメーションを繰り返す間隔
}

$('#next').on('click',function(){
window.clearTimeout(timerID);
 slide();
});
$('#prev').on('click',function(){
window.clearTimeout(timerID);
if(slideNum > 1){
slideNum = slideNum - 2;
}else{
slideNum = size - 1;
}
 slide();
});
});
