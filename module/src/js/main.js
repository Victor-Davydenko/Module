$(".menu-opener").click(function() {
    $('.burger-menu').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".center-header .container").length) {
        $('.burger-menu').hide();
    }
    e.stopPropagation();
});

$(document).ready(function(){
    $('.promo-slider').slick({
        dots:true,
        arrows: true,
        autoplay:true
    });
});

$('#star').raty({
    path: "images"
});

$('#star1').raty({
    path: "images"
});

$('#star2').raty({
    path: "images"
});

$('#star3').raty({
    path: "images"
});

$('#star5').raty({
    path: "images"
});

$('#star6').raty({
    path: "images"
});

$('#star7').raty({
    path: "images"
});

$('#star8').raty({
    path: "images"
});

$(document).ready(function(){
    $('.popular__slider').slick({
        dots:false,
        arrows: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll:1,
        variableWidth: true,
        infinite: true
    });
});

$(document).ready(function(){
    $('.news__holder').slick({
        dots:false,
        arrows: false,
        autoplay:false,
        slidesToShow: 1,
        variableWidth: true
    });
});





