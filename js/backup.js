$(document).ready(function(){
    $("p").click(function(){
    $("img").show();
       });
  
    
     $("p").click(function() {
       $(".clickable").click(function(){
 
         
       $(".walrus-showing").toggle();
       $(".walrus-hidden").toggle();
       }); 
     });
   });
   $(document).ready(function(){
    $("#blanks form").submit(function(){
      $(".person1").append("blah blah");
      $(".person2").append("blah blah");
      $(".animal").append("blah blah");
      $(".Exclamation").append("blah blah");
      $(".verb").append("blah blah");
      $(".noun").append("blah blah");
      $("#story").show();
    });
  });
  $(document).ready(function() {
    $("#blanks form").submit(function() {
        $(".person1").append("blah blah");
        $(".person2").append("blah blah");
        $(".animal").append("blah blah");
        $(".exclamation").append("blah blah");
        $(".verb").append("blah blah");
        $(".noun").append("blah blah");

        $("#story").show();
    });
});
 
 