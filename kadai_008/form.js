$(function() {
    $('.btn').on('click', () => {
        $('.text-box').val('クリックしました');
        let aaa = $('.text-box').val();
        console.log(aaa);
    });
});