$(document).ready(function(){
    $(".scrollUp").on('click', function(event)) {
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }), 800, function(){
          window.location.hash = hash;
        }
      }
    });