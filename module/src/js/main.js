
$(document).ready(function(){
    $('.promo-slider').slick({
        dots:false,
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


$('#personal-estimation').raty({
    path: "images"
});

$('#personal1-estimation').raty({
    path: "images",
    readOnly:true,
});

$('#personal2-estimation').raty({
    path: "images",
    readOnly:true,
});

$('#personal3-estimation').raty({
    path: "images",
    readOnly:true,
});

$('#personal4-estimation').raty({
    path: "images",
    readOnly:true,
});
$('#personal5-estimation').raty({
    path: "images",
    readOnly:true,
});
$('#personal6-estimation').raty({
    path: "images",
    readOnly:true,
});
$('#personal7-estimation').raty({
    path: "images",
    readOnly:true,
});

$('#star9').raty({
    path: "images"
});



$(document).ready(function(){
    $('.popular__slider').slick({
        dots:false,
        arrows: false,
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


$(document).ready(function(){
    $('.product__slider').slick({
        dots:true,
        arrows: false,
        autoplay:false,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true
    });
});


$('#tab-container').easytabs();


$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            
        }
    });
});

