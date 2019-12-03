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




});