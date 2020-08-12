
function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 
function wait(t)
{
  setTimeout(function(){console.log();}, t);
}
//wait(5000);
  $(document).ready(function()
  {

  	$(".loader").fadeOut(2000);
  	$(".full-height").delay(1000).animate({top: "20px"},700);
  	 $("#expand_card").on('click',function()
                     {
  console.log("dkkdf");
  $("#modal1").show();
  if($("body").width()>500)
    {disableScroll();}
      $(".modal-dialog").addClass("animate");


}
                     );
  	 	 $("#expand_card2").on('click',function()
                     {
  console.log("dkkdf2");
  $("#modal2").show();
  disableScroll();
    $(".modal-dialog").addClass("animate");

}
                     );
  	 	 	 $("#expand_card3").on('click',function()
                     {
  console.log("dkkdf3");
  $("#modal3").show();
  disableScroll();
    $(".modal-dialog").addClass("animate");

}
                     );
  	  $(".close-modal").on('click',function()
                     {
  console.log("dkkdf");
   wait(2000);
   $(".modal-dialog").removeClass("animate");
  $(".modal").hide();
  enableScroll();
   

}
                     );
  	  $(".nav-item").on('click',function()
                  {
 $(".navbar-toggler").click(); 
}
                  );
  }
  );