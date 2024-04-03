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
//navbar
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
    $('#loading-spinner-container').showLoadingSpinner();
    setTimeout(function () {
        $('#loading-spinner-container').hideLoadingSpinner();
    }, 500);
});
$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
     
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          $("div.cards")
            .removeClass("showing");
        } else {
         
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
      
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });