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
  }); // End of entrance-variant, Tabs
  // strengthen-protection, Tabs

  $('.strengthen-protection__list-item').on('click', function () {
    var self = $(this);
    var tabs = $('[data-strengthen-tabs]');
    var activeTabNumber = self.data('strengthen-tabs');
    var blockCollection = $("[data-strengthen-protection]");
    var activeBlock = $("[data-strengthen-protection=".concat(activeTabNumber, "]"));

    if (!self.hasClass('active')) {
      tabs.removeClass('active');
      self.addClass('active');
      blockCollection.hide();
      activeBlock.fadeIn(300);
      activeBlock.css('display', 'flex');
    }
  }); // End of strengthen-protection, Tabs
});