$(function() {

    // header
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance) {
            $(".main-header").addClass("scroll-class");
        } else {
            $(".main-header").removeClass("scroll-class");
        }

        $('section').each(function (i) {
            if ($(this).position().top - 51 <= scrollDistance) {
                $('a[href*="#"]:not([href="#"]).active').removeClass('active');
                $('a').eq(i).addClass('active');
            }
        });

    }).scroll();

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 500);
                    return false;
                }
            }
        });
    });

    // search show/hide results
    $('.search-wrapper__input input').on('input', function () {
       $('.search-wrapper__list').addClass('show');
    });

    $('.hide-results').on('click', function () {
       $('.search-wrapper__list').removeClass('show');
    });


    // catalog effects
    $('.catalog-col').on('click', function (e) {
       e.preventDefault();
       $('.catalog-wrap').toggleClass('active')
       $('.catalog-col').toggleClass('hide');
       $(this).toggleClass('active');
       $('.sub-category-grid').toggleClass('show');
    });
});
