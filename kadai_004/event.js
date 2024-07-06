// $(function(){
//     $(window).on('load', () => {
//         console.log('loadイベントが発生しました');
//     });
//     $(window).on('scroll', () => {
//         console.log('scrollイベントが発生しました')
//     });
// });
console.log('test');

$(window).on('load', () => {
    console.log('loadイベントが発生しました');
});

$(function() {
    console.log('test2');
    $(window).on({
        // 'load': () => {console.log('loadイベントが発生しました')},
        'scroll': () => {console.log('scrollイベントが発生しました')},    
    });
    
});