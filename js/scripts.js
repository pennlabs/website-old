function chk_scroll(e)
{
  e.stopPropagation();
    var height = $('#banner').height() + 55;
    console.log(height);
    if ($(this).scrollTop() > height) {
      $('.navbar').addClass('navbar-fixed-top');

    }
    else if ($(this).scrollTop() < height) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
}

// Cache selectors
var lastId,
    topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});

$(document).ready(function(){

    $(window).bind('scroll',chk_scroll);
      $('#pennlabs-submit').click(function(evt) {
      evt.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var comments = $('#message').val();
      $.ajax({
        url: "/send.php",
            type: "POST",
            dataType: "json",
            data: {
              'name' : name,
              'email' : email,
              'message' : comments
            },
            success: function(response) {
              if (response['Response'] == 'Success') {
                $('#pennlabs-form').empty();
                $('#pennlabs-form').append('<p>Thanks for your feedback - we will get back to you soon!</p>');
              } else {
                $('#pennlabs-form').prepend('<p>' + response['Error'] + ' Please try again.</p>');
                
              }
             },
            error: function(response) {
              alert(response);
            },
      });
  });
});
