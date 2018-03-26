// JavaScript Document

$(document).ready(main);

var contador = 1 ;

function main () {
	$('header.menu_bar').on('click',function(){
		//$('.menu_sup').toggle();
		
		if(contador==1){
			$('header nav').animate({
				left:'0'
				});
				contador=0;
			}else {
				contador=1;
				$('header nav').animate({
				left:'-100%'
				});
				}
		
			});