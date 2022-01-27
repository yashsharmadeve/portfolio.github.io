$(document).ready(function(){
    $("#bars").click(function(){
        $("#list").css("right", "0");
    });
    $(".fa-times").click(function(){
        $("#list").css("right", "-100%");
    });

    // $("#tog_btn").toggle
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
          $('#topBtn').fadeIn();
        } else{
          $('#topBtn').fadeOut();
        }
      });
    
      $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
      });

});