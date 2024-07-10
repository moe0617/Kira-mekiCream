// カルーセル
$('.voices__slick').slick({
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: '<img src="assets/image/voices/arrow-left-circle_sp.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="assets/image/voices/arrow-right-circle_sp.svg" class="slide-arrow next-arrow">',

    centerMode: true,
    // fade: true,
    // autoplay: true,
    // autoplaySpeed: 7000,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// アコーディオン
$('.accordion-content').hide();
$('.accordion-title').on('click', function(e) {
    var content = $(this).next();
    $(this).toggleClass('selected');
    content.slideToggle();
});