$(document).ready(function () {
    var navbar = $(".navbar");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            navbar.addClass("navbar-fixed");
        } else {
            navbar.removeClass("navbar-fixed");
        }
    });
});


$(document).ready(function () {
    $(".navbar-nav .nav-item a.nav-link").hover(
        function () {
            $(this).css({ "color": "#28a745","border-bottom": "2px solid #28a745" });
        },
        function () {
            $(this).css({ "color": "white", "border":"none" });
        }
    );
});


//focuce on search box
$(document).ready(function() {
    
    $('.green-shadow-form input').focus(function() {
        $(this).css('box-shadow', '0 0 5px 0px green'); 
    });
    $('.green-shadow-form input').blur(function() {
        $(this).css('box-shadow', ''); 
    });
});

$(document).ready(function () {
    $(".socialMedia a").hover(
        function () {
            $(this).css({ "background-color": "#28a745", "color": "#ffffff" });
        },
        function () {
            $(this).css({ "background-color": "", "color": "green" });
        }
    );
});
//scroll
$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });
});



//spinner
(function ($) {
    $.fn.showLoadingSpinner = function () {
        return this.each(function () {
            $(this).fadeIn();
        });
    };

    $.fn.hideLoadingSpinner = function () {
        return this.each(function () {
            $(this).fadeOut();
        });
    };
})(jQuery);


$(document).ready(function () {
    
    $('#loading-spinner-container').showLoadingSpinner();

    setTimeout(function () {
        $('#loading-spinner-container').hideLoadingSpinner();
    }, 500);
});


