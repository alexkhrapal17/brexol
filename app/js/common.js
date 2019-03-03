$(function () {

    // header
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance) {
            $(".main-header").addClass("scroll-class");
        } else {
            $(".main-header").removeClass("scroll-class");
        }
    }).scroll();

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length && $(window).width() > 767) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 500);
                    return false;
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 53
                    }, 500);
                    return false;
                }
            }
        });
    });

    // focus input
    $('.dropdown-search').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('.search-wrapper__input input').focus();
        }, 500);
    });

    // search show/hide results
    $('.search-wrapper__input input').on('input', function () {
        $('.search-wrapper__list').slideDown();
    });

    $('.hide-results').on('click', function () {
        $(this).closest('.search-wrapper__list').slideUp();
        $(this).closest('.catalog-details').slideUp();
        $(this).closest('.news-details').slideUp();
    });


    // catalog effects
    $('.catalog-col').on('click', function (e) {
        e.preventDefault();
        $('.catalog-wrap').toggleClass('active')
        $('.catalog-col').toggleClass('hide');
        $(this).toggleClass('active');
        $('.sub-category-grid').toggleClass('show');
    });

    // show/hide catalog details section
    $('.list-item').on('click', function (e) {
        e.preventDefault();
        $('.catalog-details').slideDown();
    });

    // show/hide news details section
    $('.news-col').on('click', function (e) {
        e.preventDefault();
        $('.news-details').slideDown();
    });

    // slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true
    });

    // mobile nav
    $('.mobile-menu-button').on('click', function (e) {
       e.preventDefault();
       if ($('.mobile-menu-button').hasClass('open')) {
           $('.mobile-menu-button').removeClass('open')
       } else {
           $('.mobile-menu-button').addClass('open');
       }

        if ($('.main-header__nav').hasClass('show')) {
            $('.main-header__nav').removeClass('show')
        } else {
            $('.main-header__nav').addClass('show');
        }
    });

    if ($(window).width() < 767) {
        $('.main-header__nav, .nav-item').on('click', function (e) {
            e.preventDefault();
            $('.mobile-menu-button').removeClass('open');
            $('.main-header__nav').removeClass('show');
        });

        $('.list-item').on('click', function (e) {
           e.preventDefault();
            $('html,body').animate({
                scrollTop: $('.catalog-details').offset().top - 53
            },'slow');
        });

        $('.news-col').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $('.news-details').offset().top - 53
            },'slow');
        });
    }
});
