

  $(document).ready(function()
  {

  	$(".loader").fadeOut(2000);
  	$(".full-height").delay(1000).animate({top: "20px"},700);
  	 $("#expand_card").on('click',function()
                     {
  console.log("dkkdf");
  $("#modal1").show();
}
                     );
  	 	 $("#expand_card2").on('click',function()
                     {
  console.log("dkkdf2");
  $("#modal2").show();
}
                     );
  	 	 	 $("#expand_card3").on('click',function()
                     {
  console.log("dkkdf3");
  $("#modal3").show();
}
                     );
  	  $(".close-modal").on('click',function()
                     {
  console.log("dkkdf");
  $(".modal").hide();
}
                     );
  }
  );