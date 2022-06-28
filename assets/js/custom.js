(function ($) {
    "use strict";
    $(window).on("load", function (event) {
        $(".back").delay(500).fadeOut(500);
    });
    
    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $(".navbar-area").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });
    
    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "1199"
    });
    
    new Typewriter('.type', {
        strings: ['Investment', 'Life'],
        autoStart: true,
        loop: true,
        cursor: '',
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

    AOS.init({
        duration: 600,
    });

    // WOW Animation JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: false,
        });
        wow.init();
    }
})(jQuery);


function sendDepositEmail() {
    Email.send({
        SecureToken: "64e29f2a-1b91-4ccf-8043-505b2f77f1bb",
        // Host : "smtp.elasticemail.com",
        // Username : "riazuddinbappy52@gmail.com",
        // Password : "C62DEE3654E3660D723ECC605B7695AFA756",
        To : 'riazuddinbappy@gmail.com',
        From : document.getElementById("client_email").value,
        Subject : "Deposit",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
    
}