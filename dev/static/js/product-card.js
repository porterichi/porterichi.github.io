$(() => {


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
    let counterNumber = parseInt($('.product-variant__card-number').text());

    counterMinus.on('click', e => {
        counterNumber--;
    });

});

