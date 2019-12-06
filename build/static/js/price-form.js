"use strict";

$(function () {
  var submit = $('.price-form__submit');
  submit.on('click', function (e) {
    e.preventDefault();
    $('.price-form__form').hide();
    $('.price-form__title').hide();
    var series = $('[data-price="series"]').val();
    var name = $('[data-price="name"]').val();
    var price = $('[data-price="price"]').val();
    $('.price-form__result-series').text(series);
    $('.price-form__result-title').text(name);
    $('.price-form__result-price').text("".concat(price, " \u0440."));
    $('.price-form__result').show();
    console.dir(series);
  });
});