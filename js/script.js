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

const hoverContent = document.querySelector('#hoverContent');
const hoverImage = hoverContent.querySelector('img');
const hoverText = document.querySelector('#hoverText');
const yearContents = document.querySelectorAll('.yearContent');

console.log(hoverText.textContent);

yearContents.forEach((yearContent) => {
    yearContent.addEventListener('mouseover', () => {
        const yearImage = yearContent.querySelector('img');
        const yearText = yearContent.querySelector('.yearText');
        console.log(yearText.textContent);
        hoverImage.src = yearImage.src;
        hoverText.textContent = yearText.textContent;
    })
})