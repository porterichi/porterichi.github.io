"use strict";

$(function () {
  var closeBtn = $('.search-block__close');
  var searchInput = $('.search-block__input');
  var disableClass = 'disabled';
  searchInput.on('keyup', function () {
    $(this).val().length <= 1 ? closeBtn.addClass(disableClass) : closeBtn.removeClass(disableClass);
  });
  closeBtn.on('click', function () {
    searchInput.val('');
    closeBtn.addClass(disableClass);
  });
});