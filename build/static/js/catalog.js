"use strict";

$(function () {
  var body = $('body');
  var sortFilterActive = 'sort-filter__dropdown--active';
  var sortFilter = $('.sort-filter'); // Global Page UI Controller

  $(document).on('click', function (e) {
    var target = $(e.target).offsetParent(); // Sort Filter

    if (!sortFilter.is(target) && sortFilter.has(target).length === 0) {
      var dropdown = $('.sort-filter__dropdown');
      dropdown.fadeOut(0);
      body.removeClass(sortFilterActive);
    }
  }); // Open Sort Filter Dropdown

  sortFilter.on('click', function () {
    var dropdown = $(this).find('.sort-filter__dropdown');

    if (body.hasClass(sortFilterActive)) {
      dropdown.fadeOut(0);
      body.removeClass(sortFilterActive);
      return true;
    }

    body.addClass(sortFilterActive);
    dropdown.fadeIn(0);
  });
});