  $(".scrollUp").on("click", function(event){     
      event.preventDefault(); 
      $("html, body").animate({scrollTop: $(".navigation").offset().top}, 800);
  });