(function ($) {
    "use strict";
    $(window).on("load", function (event) {
        $(".loader").delay(500).fadeOut(500);
    });
    // $(".testimonial-slider-one").owlCarousel({
    //     nav: false,
    //     dots: true,
    //     loop: true,
    //     margin: 25,
    //     items: 1,
    //     thumbs: false,
    //     smartSpeed: 1300,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     autoplayHoverPause: false,
    //     responsiveClass: true,
    //     autoHeight: true,
    // });
    
        // for sticky navbar
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $(".navbar-area").addClass("sticky");
            } else {
                $(".navbar-area").removeClass("sticky");
            }
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $(".navbar-area .main-nav").addClass("sticky");
            } else {
                $(".navbar-area .main-nav").removeClass("sticky");
            }
        });
    

    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    
    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $(".go-top").addClass("active");
            if (scrolled < 300) $(".go-top").removeClass("active");
        });
        // Click Event
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });
})(jQuery);