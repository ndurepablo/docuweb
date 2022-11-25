
// Checking that the body is ready 
$("body").ready(function(){
  // Event listener 
  $(".a-btn-activate").on("click", function(){
      $("#div-parent").fadeOut();

      // Checking that the promise (div parent) is resolved
      $("#div-parent" ).promise().done(function() {
          $("#div-list").load("video-list.html").hide().fadeIn(1000);
          })

      // Checking that the promise (div-list) is resolved
      $("#div-list" ).promise().done(function() {
          $("#nav-list").delay(1000).load("menu.html").hide().fadeIn(1000); 
          })
          
          // Checking that the promise (nav-list) is resolved
          $("#nav-list").promise().done(function(){
            // Add transition
            $("ul").addClass("navbar-custom-trans")
          })

          // Checking that the promise (nav-list) is resolved
          $("#nav-list").promise().done(function(){
            // Add transition
            $("#nav-right").delay(1000).load("menu-right.html").hide().fadeIn(1000); 
          })
        });

    // Event listener 
    $(".btn-play").on("click", function(){
      console.log('play');
      $("#dynamic-content").fadeOut()


        // Checking that the promise (div parent) is resolved
        $("#dynamic-content" ).promise().done(function() {
          $("#dynamic-content").load("player.html").hide().fadeIn(1000);
          })
    });

  });



