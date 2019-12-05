$(function() {

    const body = $('body');

    const sortFilterActive = 'sort-filter__dropdown--active';
    const sortFilter = $('.sort-filter');
    const sortDropdown = $(this).find('.sort-filter__dropdown');

    function hideActiveElement(el, activeClass){
        el.fadeOut(0);
        body.removeClass(activeClass);
    }

    // Global Page UI Controller
    $(document).on('click', function (e) {
        const target = $(e.target).offsetParent();

        // Sort Filter
        if (!sortFilter.is(target)
            && sortFilter.has(target).length === 0) {

            hideActiveElement(sortDropdown, sortFilterActive);
        }
    });

    // Open Sort Filter Dropdown
    sortFilter.on('click', function() {


        if (body.hasClass(sortFilterActive)) {
            sortDropdown.fadeOut(0);
            body.removeClass(sortFilterActive);
            return true;
        }
        body.addClass(sortFilterActive);
        sortDropdown.fadeIn(0);
    });


});