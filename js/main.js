$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#top').offset().top; // pixels to the top of div1
        var ht = $('#div1').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
            $('#navibar').addClass('blue');
        }
    });
})
