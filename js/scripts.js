function chk_scroll(e)
{
  e.stopPropagation();
    var height = $('#banner').height();
    console.log(height);
    if ($(this).scrollTop() > height) {
      $('.navbar').addClass('navbar-fixed-top');

    }
    else if ($(this).scrollTop() < height) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
}

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
