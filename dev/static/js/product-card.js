$(function() {


    //  Choose Box Tabs
    const items = $('.choose-box .choose-box__item');
    const tabs = $('.choose-box .choose-box__slide');
    const textBlock = $('.choose-box .choose-box__text-block');
    const section = $('.choose-box');

    items.on('click', function() {
        const itemDataNumber = $(this).data('choose-item');
        const slide = section.find(`[data-choose-slide=${itemDataNumber}]`);

        if(!$(this).hasClass('choose-box__item--active')) {
            items.removeClass('choose-box__item--active');
            $(this).addClass('choose-box__item--active');

            textBlock.fadeOut(0);
            tabs.fadeOut(0);
            slide.fadeIn(300);
        }

    });



    /*let $carousel = $('.hardware__slider').slick({
        variableWidth: true,
        slidesToShow: 1,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        infinite: false
    });*/
    $('.hardware__slider').owlCarousel({
        items: 3,
        loop: false,
        margin: 15,
        nav: false,
        dots: false,
        scrollbarType: "progress"
    });
    const slideCount = $('.hardware__slide').length;

    /*$( ".hardware__range" ).slider({
        mode: "fast",
        change: function( event, ui ) {
            let carousel = $carousel.slick( "getSlick" );
            let goToSlide = ui.value * (carousel.slideCount-1) / 5;
            $carousel.slick( "goTo", goToSlide );
            console.dir(goToSlide);
        }
    });*/
    const reviewArrow = `<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659728 4.53553 0.464466C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z"/>
</svg>`;

    $('.reviews__container').owlCarousel({
        items: 3,
        loop: false,
        margin: 173,
        nav: true,
        navText: [
            reviewArrow,
            reviewArrow
        ]
    });





    // Change door and color
    const colors = $('.catalog-item__color');
    const doors = $('.product-variant__img');

    colors.on('click', e => {

        const el = $(e.currentTarget);
        const activeColorClass = 'catalog-item__color--active';
        const isActive = el.hasClass(activeColorClass);
        const color = el.data('color');
        const door = $(`[data-door=${color}]`);

        if(isActive) {
            return false;
        }

        colors.removeClass(activeColorClass);
        el.addClass(activeColorClass);

        doors.hide();
        door.fadeIn(200);
    });


    // Change Counter
    const counterMinus = $('.product-variant__card-minus');
    const counterPlus = $('.product-variant__card-plus');
    let counter = $('.product-variant__card-number');
    let counterNumber = parseInt($('.product-variant__card-number').text());

    counterMinus.on('click', function() {
        if( counterNumber >= 2 ) {
            counter.text(--counterNumber);
        }
    });

    counterPlus.on('click', function() {
        counter.text(++counterNumber);
    });

    // Scroll To
    $(".product-variant__card-cost").click(function() {
        $("body,html").animate(
            {
                scrollTop: $(".product-cost").offset().top
            },
            800 //speed
        );
    });

/*    // Hot Fix for Desct on mobile
    if (document.documentElement.clientWidth < 1300) {
        document.querySelector("meta[name=viewport]").setAttribute(
            'content',
            'width=1450');
    };*/

    // Cost Slider
    let productCostInvisible = $('.product-cost-right__slider');

    productCostInvisible.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        margin: 10,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
    });

    $('.stained-glass__slider').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        margin: 10,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
    });

    $(window).scroll(function() {
        var top = $('.product-cost__slider').offset().top + 500;
        var middle = $('.product-cost__slide--middle').offset().top;
        var bottom = $('.product-cost__slide--bottom').offset().top;

        if($(this).scrollTop() <  top) {
            productCostInvisible.trigger('to.owl.carousel', 0);
            // Invisible Door
            $('.product-cost__invisible--big').fadeOut(300);
            $('.product-cost__invisible--small').fadeOut(300);
            $('.product-cost__invisible--middle').fadeIn(300);

            // Product Card
            $('.product-cost__img-door--first-line').fadeIn(300);
            $('.product-cost__img-door--second-line').fadeIn(300);
            $('.product-cost__img-door--third-line').fadeOut(300);
            $('.product-cost__img-door--fourth-line').fadeOut(300);
        }

        else if ($(this).scrollTop() <  middle) {
            productCostInvisible.trigger('to.owl.carousel', 1);
            // Invisible Door
            $('.product-cost__invisible--big').fadeIn(300);
            $('.product-cost__invisible--small').fadeIn(300);
            $('.product-cost__invisible--middle').fadeOut(300);

            // Product Card
            $('.product-cost__img-door--first-line').fadeOut(300);
            $('.product-cost__img-door--second-line').fadeOut(300);
            $('.product-cost__img-door--third-line').fadeIn(300);
            $('.product-cost__img-door--fourth-line').fadeIn(300);
        }
        else if ($(this).scrollTop() < bottom ) {
            productCostInvisible.trigger('to.owl.carousel', 2);

            $('.product-cost__img-door--first-line').fadeOut(300);
            $('.product-cost__img-door--second-line').fadeOut(300);
            $('.product-cost__img-door--third-line').fadeOut(300);
            $('.product-cost__img-door--fourth-line').fadeOut(300);
        }
    });

    const extrasArrow = `<svg width="38" height="74" viewBox="0 0 38 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 73L37 37L1 1" stroke="#868686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    // Extras Pop-up gallery

    $('.extras__link').on('click', (e) => {
        e.preventDefault();
        $('.extras__popup').fadeIn(200);
        $('.extras__popup').css('display','flex');
        $('.extras__popup-container').owlCarousel({
            items: 1,
            loop: false,
            nav: true,
            dots: true,
            margin: 10,
            navText: [
                extrasArrow,
                extrasArrow
            ]
        });
    });
    $('.extras__popup-close').on('click', (e)=> {
        $('.extras__popup').fadeOut(200);
    });


});

