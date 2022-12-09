
// Checking that the body is ready 
$("body").ready(function(){


/*  STEP 1:  LOAD VIDEO GRID */
  // Event listener: first play btn
  $(".a-btn-activate").on("click", function(){
      $("#div-parent").fadeOut();

      // Checking that the promise (div parent) is resolved
      $("#div-parent" ).promise().done(function() {
          $("#div-list").load("video-list.html").hide().fadeIn(1000);
          })

      // Checking that the promise (div-list) is resolved: load bottom menu
      $("#div-list" ).promise().done(function() {
          $("#nav-list").delay(1000).load("menu.html").hide().fadeIn(1000); 
          })
          
          // Checking that the promise (nav-list) is resolved: add menu animation
          $("#nav-list").promise().done(function(){
            // Add transition
            $("ul").addClass("navbar-custom-trans")
          })

          // Checking that the promise (nav-list) is resolved: load right menu
          $("#nav-list").promise().done(function(){
            // Add transition
            $("#nav-right").delay(1000).load("menu-right.html").hide().fadeIn(1000); 
          })
        });



/*  STEP 2: LOAD FULLSCREEN VIDEO */
    // Event listener: video play btn
    $(".btn-play").on("click", function(){
      $("#div-list").fadeOut()

      // Checking that the promise (div-list) is resolved
      $("#div-list" ).promise().done(function() {
        $("#div-video").load("player.html").hide().fadeIn(1000);
      })
    });



/*  STEP 3: RETURN TO VIDEO GRID */
    // Event listener: play in video close btn
    $(".btn-close").on("click", function(){
      $("#div-video").fadeOut()
      // Checking that the promise (div-video) is resolved
      $("#div-video" ).promise().done(function() {
        $("#div-list").load("video-list.html").hide().fadeIn(1000);
        })
  
    });

  });



