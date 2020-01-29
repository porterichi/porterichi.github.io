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
    // End of entrance-variant, Tabs

    // strengthen-protection, Tabs
    $('.strengthen-protection__list-item').on('click', function() {
        const self = $(this);
        const tabs = $('[data-strengthen-tabs]');
        const activeTabNumber = self.data('strengthen-tabs');
        const blockCollection = $(`[data-strengthen-protection]`);
        const activeBlock = $(`[data-strengthen-protection=${activeTabNumber}]`);

        if( !self.hasClass('active') ) {

            tabs.removeClass('active');
            self.addClass('active');

            blockCollection.hide();
            activeBlock.fadeIn(300);
            activeBlock.css('display', 'flex');
        }

    });

    // End of strengthen-protection, Tabs
});