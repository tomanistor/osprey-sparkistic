$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        if( scrollPosition > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
            $("nav > div.logo").fadeIn();
            $("nav > div.nav-toggle").fadeIn();
        } else {
            $("nav").removeClass("nav-fixed");
            $("nav > div.logo").fadeOut();
            $("nav > div.nav-toggle").fadeOut();
        }
        // // Active nav link changes on scroll
        // $(".section").each(function() {
        //     var target = $(this).offset().top;
        //     var id = $(this).attr("id");
        //     if( scrollPosition >= target ) {
        //         $("nav > div > h3 > a").removeClass("active");
        //         $("nav > div > h3 > a[href=#" + id + "]").addClass("active");
        //     }
        // });
    });

    // Full screen nav activation
    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $(".page").toggleClass("active");
        $(this).find("img").toggle();
    });

    // Close full screen nav on link click
    $(".nav-full").find("a").click(function(){
        $(".nav-full").toggleClass("active");
        $(".page").toggleClass("active");
        $(".nav-icon").find("img").toggle();
    });

    // Highlight active nav link


    // Highlight.js initialization
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});
