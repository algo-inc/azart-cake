$(document).ready(function () {
    $('select').select2({
        minimumResultsForSearch: -1
    });
    var slider = document.getElementById('prices-slider');

    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        tooltips: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
});