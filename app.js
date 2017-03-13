// your code here



$(function click() {
    $('.thumbnail').click(function() {
        $('.hero img').attr('src', $(this).find('img').attr('src'));
    });
});

// $(function() {
//     click();
// });
// function handleThumbnailClicks() {
//   $('.thumbnail').click(function(event) {
//     var imgSrc = $(event.currentTarget).find('img').attr('src');
//     $('.hero img').attr('src', imgSrc);
//   })
// }
//
// $(function() {
//   handleThumbnailClicks();
// });
