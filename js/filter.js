$(document).ready(function () {
    $('select').select2({
        minimumResultsForSearch: -1
    });
    var slider = document.getElementById('prices-slider');

    noUiSlider.create(slider, {
        start: [1, 800],
        connect: true,
        tooltips: true,
        range: {
            'min': 0,
            'max': 1000
        }
    });
});