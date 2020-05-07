$(function() {

    const closeBtn = $('.search-block__close');
    const searchInput = $('.search-block__input');
    const disableClass = 'disabled';

    searchInput.on('keyup', function() {
        $(this).val().length <= 1 ? closeBtn.addClass(disableClass) : closeBtn.removeClass(disableClass);
    });

    closeBtn.on('click', function(){
        searchInput.val('');
        closeBtn.addClass(disableClass);
    });

});