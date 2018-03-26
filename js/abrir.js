// JavaScript Document
$('.menu-bar').on('click',function(){
	$('.cuerpo').toggleClass('abrir');
});





$(document).ready(function() {
    var triggers = $("#menulateral span.despliega");
    triggers.click(function() {
        $(this).next("ul.acordeon").slideToggle(300).siblings("ul.acordeon").slideUp("slow");
    });
    triggers.first().click();
});