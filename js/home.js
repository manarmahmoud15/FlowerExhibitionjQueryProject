$(document).ready (function(){
    $('.list').click(function(){
        const value =$(this).attr('data-filter');
        if (value == 'ALL')
        {
            $('.itemBox').show('1000');
        }
        else {
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})


// loading 

$(document).ready(function(){
    $("#loading .spinner").fadeOut(1000 , ()=> {
        $("#loading").fadeOut(1000 ,()=> {
            $("#loading").remove();
            $("body").css("overflow-y" , "auto")
        } )
    });

})

$(document).ready(function(){
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('fixed-top');
      } else {
        $('.navbar').removeClass('fixed-top');
      }
    });
  });
var btn = $('#backToTop');
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 300);
});
$(document).ready(function () {
    $(".last-section").hover(
        function () {
            $(this).css({ "color": "white" });
        },
        function () {
            $(this).css({ "color": "gray" });
        }
    );
});
$(document).ready(function () {
    $(".my-foot-link").hover(
        function () {
            $(this).css({ "color": "white" });
        },
        function () {
            $(this).css({ "color": "gray" });
        }
    );
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
$(document).ready(function () {
    var button = $('.btn.alazea-btn');

    button.css('background-color', '#28a745');

    button.on({
        'mouseenter': function () {
            $(this).css({
                'background-color': 'white',
                'color': '#28a745',
                'border': '2px solid #28a745'
            });
        },
        'mouseleave': function () {
            if (!button.is(':focus')) {
                $(this).css({
                    'background-color': '#28a745',
                    'color': 'white',
                    'border': 'none'
                });
            }
        }
    });
});
$(document).ready(function () {
    $('input[type="text"], input[type="email"], textarea').focus(function () {
        $(this).css({
            'border-color': '#28a745',
            'box-shadow': '0 0 10px rgba(40, 167, 69, 0.5)'
        });
    });
    $('input[type="text"], input[type="email"]').blur(function () {
        $(this).css({
            'border-color': '',
            'box-shadow': ''
        });
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