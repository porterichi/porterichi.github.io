$(document).ready(function () {
    svg4everybody({});

    const state = {
        items: '.catalog-item__color',
        active: 'catalog-item__color--active'
    };

    const maskColors = {
        'ampir': '#E1D7DA',
        'barokko': '#CDDBEC',
        'bauhouse': '#CDDBEC',
        'venezia': '#ACA7A8',
        'versal': '#E1D7DA',
        'georg': '#CEBB95',
        'industrial ': '#CEBB95',
        'italiano': '#D2C8BC',
        'lounge': '#BBBEBB',
        'loft': '#D4D8CF',
        'mayer': '#EBDAB1',
        'military': '#CDC693',
        'minimal': '#8C786C',
        'modern': '#E0D7C6',
        'neoclassic': '#CBC8B7',
        'eclectic': '#CCCECB',
        'ecostyle': '#D2DDD0',
        'nova': '#D6CDC8',
        'hitech': '#E0E0E0',
        'rustik': '#A9A7A3',
        'techno': '#AEB2BD'

    };

    const allElements = $('.catalog-item');

    $.each(allElements, function(i, val) {
        const mask = $(val).find('.catalog-item__mask');
        const maskColor = mask.data('mask');
        if(maskColor !== undefined) {
            mask.css( 'background-color', maskColors[maskColor] );
        }
    });

    // Catalog UI

    // Change Product Color
    $('.catalog-item__color').on('click', function(e) {
        e.preventDefault();

        const el = $(this);
        const parent = el.parent();
        const collection = parent.find(state.items);

        if(!el.hasClass(state.active)) {
            collection.removeClass(state.active);
            el.addClass(state.active);
        }
    });

    // Collection Cost Slider
    let productCostInvisible = $('.product-cost__slider');

    productCostInvisible.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false
    });

    /*productCostInvisible.on('mousewheel', '.owl-stage', function (e) {

        if (e.deltaY>0) {
            productCostInvisible.trigger('next.owl');
        } else {
            productCostInvisible.trigger('prev.owl');
        }
        e.preventDefault();
    });*/

    // Hardware Sly Slider
    var $frame = $('.hardware__slider-wrap');
    var $wrap = $frame.parent();

    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        mouseDragging: 1,
        touchDragging: 1,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: false
    });


    // Header Scroll - Catalog Filter
    var filterItems = $('.main-filter__item');
    var filterItemsWidth = 0;
    var rowFullWidth = $('.main-filter__row').width();

    filterItems.map(function(i, el) {
        filterItemsWidth += $(el).width();
    });

    // Review Container

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

    // Scroll
    $(window).scroll(function(){
        var offset = $('.white').offset(),
            offsetwb = $('.white + .black').offset();
        if ($(this).scrollTop() > offset.top && $(this).scrollTop() < offsetwb.top) {

        }
        else {

        }
    });


});