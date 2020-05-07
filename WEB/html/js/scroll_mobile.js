	
    $(function() {
	/////////////////////////////////////

        /////SCROLL HOME TO FIRST/////

         $('#home').bind('mousewheel', function(e){
             if(e.originalEvent.wheelDelta < 0) {
                 //scroll down

                $('body,html').animate({
                scrollTop: $("#first").offset().top},
                1200);
                ;

                 console.log('Down');

             }else {
                 //scroll up
                 console.log('Up');
                $('#logo1').hide("display", "none!important");
                $('#logo2').css("display", "none!important!");
                $('#logo3').css("display", "none!important");
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

                $('#logo1').css("display", "none!important");
                $('#logo2').css("display", "none!important");
                $('#logo3').css("display", "none!important");
             }

             //prevent page fom scrolling
             return false;
         });

          /////SCROLL SECOND TO THIRD and SECOND TO FIRST/////

            $('#second').bind('mousewheel', function(e){
             if(e.originalEvent.wheelDelta < 0) {
                 //scroll down
                console.log('Down');

                $('body,html').animate({
                scrollTop: $("#third").offset().top},
                1000);

                $('#logo1').css("display", "none!important");
                $('#logo2').css("display", "none!important");
                $('#logo3').css("display", "none!important");
                 
             }else {
                 //scroll up
                 console.log('Up');

                $('body,html').animate({
                scrollTop: $("#first").offset().top},
                1000);

                $('#logo1').css("display", "none!important");
                $('#logo2').css("display", "none!important");
                $('#logo3').css("display", "none!important");
             }

             //prevent page fom scrolling
             return false;
         });

           /////SCROLL THIRD TO LAST and THIRD TO SECOND/////

            $('#third').bind('mousewheel', function(e){

             if(e.originalEvent.wheelDelta < 0) {
                 //scroll down
                console.log('Down');

                $('body,html').animate({
                scrollTop: $("#last").offset().top},
                1000);

                $('#logo3').css("display", "none!important");
                $('#logo2').css("display", "none!important");
                $('#logo1').css("display", "none!important");
                                
             }else {
                 //scroll up
                 console.log('Up');

                $('body,html').animate({
                scrollTop: $("#second").offset().top},
                1000);

                $('#logo1').css("display", "none!important");
                $('#logo2').css("display", "none!important");
                $('#logo3').css("display", "none!important");
             }

             //prevent page fom scrolling
             return false;
         });

                /////SCROLL LAST TO THIRD/////

            $('#last').bind('mousewheel', function(e){
             if(e.originalEvent.wheelDelta < 0) {
                 //scroll down
                console.log('Down');
                 
             }else {
                 //scroll up
                 console.log('Up');

                $('body,html').animate({
                scrollTop: $("#third").offset().top},
                1000);

                $('#logo2').css("display", "none!important");
                $('#logo3').css("display", "none!important");
                $('#logo1').css("display", "none!important");
             }

             //prevent page fom scrolling
             return false;
         });




});