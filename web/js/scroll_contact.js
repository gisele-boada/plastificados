	$(function() {
	/////////////////////////////////////

/////SCROLL HOME TO FIRST/////
$("#verMaps").on("click", function(){
            $('body,html').animate({
        scrollTop: $("#first").offset().top},
        1200);
        $('#logo1').css("display", "none");
        $('#logo2').css("display", "block");
        $('#logo3').css("display", "none");
});

 $('#home').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) {
         //scroll down

  		$('body,html').animate({
        scrollTop: $("#first").offset().top},
        1200);
/*        $('#logo1').css("display", "none");
        $('#logo2').css("display", "none");
        $('#logo3').css("display", "block");
*/
         console.log('Down');

     }else {
         //scroll up
         console.log('Up');

     }

     //prevent page fom scrolling
     return false;
 });

 /////SCROLL FIRST TO SECOND and FIRST TO HOME/////

  $('#first').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
		console.log('Down');

  		$('body,html').animate({
        scrollTop: $("#second").offset().top},
        1200);

     }else {
         //scroll up
         console.log('Up');

        $('body,html').animate({
        scrollTop: $("#home").offset().top},
        1200);

        $('#logo1').css("display", "none");
		$('#logo2').css("display", "block");
		$('#logo3').css("display", "none");
     }

     //prevent page fom scrolling
     return false;
 });





	///////////////////////////////////

	});