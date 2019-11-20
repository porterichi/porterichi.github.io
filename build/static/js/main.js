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
});