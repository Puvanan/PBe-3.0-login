const popupScreen= document.querySelector(".popup-screen");
const popupBox= document.querySelector(".popup-box");
const closeBtn= document.querySelector(".close-btn");




$('.btn-smt').on('click', function () {
    $('.login-form').attr('hidden', true);
    $('.title').removeClass('pt-lg-9');
    $('.title').addClass('pt-lg-5');
    $('.login-form-2').attr('hidden', false);
});


var mainSlider = new Swiper(".mySwiper2", {
    parallax: true,
    speed: 1200,
    effect: 'slide',
    direction: "vertical",
    autoplay: true,
    spaceBetween: 80,
    navigation: {
        nextEl: '.my-button-next',
        prevEl: '.my-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>';
        },
    },
});


$('.my-button').magnificPopup({
    delegate: 'a',
    type: 'image',
    fixedContentPos: false,
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
});



$(window).ready(function() {
    $(".mainBody").waitForImages(function() {
        console.log("images loaded");
        $(".mainBody").addClass("multiply-dark-anim");
        $(".col-lg").addClass("fade-in-anim");
        $(".chevronContainer").addClass("fade-in-anim");
    });
    
    $(".popUpImg").waitForImages(function() {
        console.log("pop up img loaded");
        setTimeout(()=>{
            popupScreen.classList.add("active");
        }, 2000);
        
    });
    
    
    
});

$(window).resize(function() {
    if (window.innerWidth < 992) {
        $(".marquee").attr({scrollamount: 7});
    } else {
        console.log("inner width big");
        $(".marquee").attr({scrollamount: 12});
    }
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});




// window.addEventListener("load",()=>{
//     setTimeout(()=>{

//     },2000); //popup screen
// });

closeBtn.addEventListener("click",() => {
    popupScreen.classList.remove("active"); //close popup
});