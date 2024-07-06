$(function() {
    $('#change-color').on('click', () => {
        $('#target').css('color', 'green');
    });

    $('#change-text').on('click', () => {
        $('#target').text('変化しました。。。');
    });

    $('#fade-out').on('click', () => {
        $('#target').fadeOut();
    });

    $('#fade-in').on('click', () => {
        $('#target').fadeIn();
    });
});