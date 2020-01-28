"use strict";

$(function () {
  // entrance-variant, Tabs
  $('.entrance-variant__tabs-item').on('click', function () {
    var itemData = $(this).data('variant-entrance');
    var blocksCollection = $('[data-variant-entrance-block]');
    var activeBlock = $("[data-variant-entrance-block=".concat(itemData, "]"));
    blocksCollection.fadeOut();
    activeBlock.fadeIn(300);
    $('.entrance-variant__tabs-item').removeClass('active');
    $(this).addClass('active');
  }); //End of entrance-variant, Tabs
});