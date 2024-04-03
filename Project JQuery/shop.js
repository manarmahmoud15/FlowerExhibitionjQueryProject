$(document).ready(function() {
            $('#myRange').on('input', function() {
                var currentValue = $(this).val();
                $('.rangePrice').text('Price: $8 - $' + currentValue);
            });
        });
    
        $(document).ready(function() {
          $('.shop-img a img').hover(
            function() {
              $(this).css('box-shadow', '0 0 10px rgba(0, 0, 0, 0.3)');
            },
            function() {
              $(this).css('box-shadow', 'none');
            }
          );
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

       