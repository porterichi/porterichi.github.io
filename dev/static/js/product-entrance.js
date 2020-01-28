$(function() {
    // entrance-variant, Tabs
    $('.entrance-variant__tabs-item').on('click', function() {
        const itemData = $(this).data('variant-entrance');
        const blocksCollection = $('[data-variant-entrance-block]');
        const activeBlock = $(`[data-variant-entrance-block=${itemData}]`);

        blocksCollection.fadeOut();
        activeBlock.fadeIn(300);

        $('.entrance-variant__tabs-item').removeClass('active');
        $(this).addClass('active');
    });


    //End of entrance-variant, Tabs


});