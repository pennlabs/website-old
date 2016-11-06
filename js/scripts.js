// Scroll Animation

// Cache selectors
var lastId,
    topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight() - 30,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href").substring(1));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href").substring(1);
      offsetTop = href === "#" ? 0 : $(href).offset().top;
  $('html, body').animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// End of Scroll Animation