//waits until page is loaded first
$(document).ready(function(){

  
    /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
    $("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });
    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });    
    $("#hr_python").hover(function(){
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });   
    $("#hr_jquery").hover(function(){
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });    
    $("#hr_django").hover(function(){
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });
    $("#hr_css").hover(function(){
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });    



    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css("background-color", "black");
    });
    
    $(".bottom_button").mouseleave(function(){
        $("body").css("background-color", "white");
    });
});

    
    //$("#button_effects1").click(function(){
       // $("#button_effects1").hide("slow");
    //});    
 
 //allows you to toggle the paragragh on and off
    $("#button_effects1").click(function(){
        $("#p1").slideToggle (1000);
    });    
    
    $("#button_effects2").click(function(){
        $("#p2").slideToggle (1000);
    });   
    
    $("#button_effects3").click(function(){
        $("#p3").slideToggle (1000);
    });   
    
    $("#button_effects4").click(function(){
        $("#p4").slideToggle (1000);
    });   
    
    $("#button_effects5").click(function(){
        $("#p5").slideToggle (1000);
    });   
    
    $("#button_effects6").click(function(){
        $("#p6").slideToggle (1000);
    });   
     
     //displays paragraphs when you click the image
    $(".card_image1").click(function(){
        $("#p1").slideDown("display:show")
    }); 
    
    $(".card_image2").click(function(){
        $("#p2").slideDown("display:show")
    });  
    
    $(".card_image3").click(function(){
        $("#p3").slideDown("display:show")
    });  
    
    $(".card_image4").click(function(){
        $("#p4").slideDown("display:show")
    });  
    
    $(".card_image5").click(function(){
        $("#p5").slideDown("display:show")
    });  
    
    $(".card_image6").click(function(){
        $("#p6").slideDown("display:show")
    });  
        
        //allows the colour to fade from 50 percent to 100 
    $("#button_effects1").mouseenter(function(){
        $("#button_effects1").fadeTo(1000,0.5);
    });    
        
    $("#button_effects1").mouseleave(function(){
        $("#button_effects1").fadeTo(1000,1);
    });     
    
    $("#button_effects2").mouseenter(function(){
        $("#button_effects1").fadeTo(1000,0.5);
    });    
        
    $("#button_effects2").mouseleave(function(){
        $("#button_effects1").fadeTo(1000,1);
    });      
    
    $("#button_effects3").mouseenter(function(){
        $("#button_effects1").fadeTo(1000,0.5);
    });    
        
    $("#button_effects3").mouseleave(function(){
        $("#button_effects1").fadeTo(1000,1);
    });      
    
    $("#button_effects4").mouseenter(function(){
        $("#button_effects1").fadeTo(1000,0.5);
    });    
        
    $("#button_effects4").mouseleave(function(){
        $("#button_effects1").fadeTo(1000,1);
    });      
    
    $("#button_effects5").mouseenter(function(){
        $("#button_effects1").fadeTo(1000,0.5);
    });    
        
    $("#button_effects5").mouseleave(function(){
        $("#button_effects1").fadeTo(1000,1);
    });    
    
    $("#button_effects6").mouseenter(function(){
        $("#button_effects1").fadeTo(1000,0.5);
    });    
        
    $("#button_effects6").mouseleave(function(){
        $("#button_effects1").fadeTo(1000,1);
    });      
    
    
    $(".card stream1").on("click", function () {
        (".card stream1").removeClass("highlight_stream");
        (".card stream2").removeClass("highlight_stream");
        (".card stream3").removeClass("highlight_stream");
        (".card stream1").addClass("highlight_stream");
    });
    
    $(".card stream2").on("click", function () {
        (".stream1").removeClass("highlight_stream");
        (".stream2").removeClass("highlight_stream");
        (".stream3").removeClass("highlight_stream");
        (".stream1").addClass("highlight_stream");
    });
    
    $(".card stream3").on("click", function () {
        (".stream1").removeClass("highlight_stream");
        (".stream2").removeClass("highlight_stream");
        (".stream3").removeClass("highlight_stream");
        (".stream1").addClass("highlight_stream");
    });
    
    //when you click card, background colour changes to pink
    $(".card").click(function() {
		$(this).toggleClass("highlight_stream");	 
	});   
    
    
    //wait until page is ready
$(document).ready(function() {
	//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
	});
});
    
    //$("p").click(function() {
       // $("p").addClass("red_text");
    //});
    
    $("h2").hover(function() {
        $("h2").addClass("hover_color");
    });
    
    
 $(document).ready(function(){
    $("#stream1_btn").on("click", function(){
         var classNames = $(".stream1").attr("class").split(" ");
      var boxClass = classNames[0];
      var className = classNames[1];
      if ($(this).css("background-color") == "white)") {
          $("." + className).css("background-color", "pink");
      } else {
          $("." + boxClass).css("background-color", "white");
          $("." + className).css("background-color", "pink");
      }
    });
});    

$("#stream2_btn").on("click", function(){
         var classNames = $(".stream2").attr("class").split(" ");
      var boxClass = classNames[0];
      var className = classNames[1];
      if ($(this).css("background-color") == "white)") {
          $("." + className).css("background-color", "pink");
      } else {
          $("." + boxClass).css("background-color", "white");
          $("." + className).css("background-color", "pink");       
    }
});    

$("#stream3_btn").on("click", function(){
         var classNames = $(".stream3").attr("class").split(" ");
      var boxClass = classNames[0];
      var className = classNames[1];
      if ($(this).css("background-color") == "white)") {
          $("." + className).css("background-color", "pink");
      } else {
          $("." + boxClass).css("background-color", "white");
          $("." + className).css("background-color", "pink");       
    }
});    

// All cards that are not currently selected will be hidden when `select_btn` is clicked
$("#select_btn").click(function() {
    $(".card:not(.highlight_stream)").hide();
});   

$("#all_btn").click(function() {
    $(".card").show();
});    