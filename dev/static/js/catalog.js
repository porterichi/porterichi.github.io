$(function() {

    const body = $('body');
    const sortFilterActive = 'sort-filter__dropdown--active';
    const sortFilter = $('.sort-filter');

    // Global Page UI Controller
    $(document).on('click', function (e) {
        const target = $(e.target).offsetParent();

        // Sort Filter
        if (!sortFilter.is(target)
            && sortFilter.has(target).length === 0) {
            body.removeClass(sortFilterActive);
        }
    });

    // Open Sort Filter Dropdown
    sortFilter.on('click', function() {
        const dropdown = $(this).find('.sort-filter__dropdown');

        if (body.hasClass(sortFilterActive)) {
            dropdown.fadeOut(0);
            body.removeClass(sortFilterActive);
            return true;
        }
        body.addClass(sortFilterActive);
        dropdown.fadeIn(0);
    });


});