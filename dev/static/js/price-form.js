$(() => {

    const submit = $('.price-form__submit');

    submit.on('click', function(e) {
        e.preventDefault();

        $('.price-form__form').hide();
        $('.price-form__title').hide();

        const series = $('[data-price="series"]').val();
        const name = $('[data-price="name"]').val();
        const price = $('[data-price="price"]').val();

        $('.price-form__result-series').text(series);
        $('.price-form__result-title').text(name);
        $('.price-form__result-price').text(`${price} р.`);

        $('.price-form__result').show();
        console.dir(series);
    });

});