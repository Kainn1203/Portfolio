$(document).ready(function() {
    let _window = $(window),
        _nav = $('.header-nav'),
        headerBottom = $('.header').height() - $('.header-nav').height();

    _window.on('scroll', function() {
        if (_window.scrollTop() > headerBottom) {
            _nav.addClass('fixed');
        } else {
            _nav.removeClass('fixed');
        }
    });

    _window.trigger('scroll');
});
