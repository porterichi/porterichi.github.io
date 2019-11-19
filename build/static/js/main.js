$(document).ready(function () {
    svg4everybody({});

    const state = {
        items: '.catalog-item__color',
        active: 'catalog-item__color--active'
    };

    const maskColors = {

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