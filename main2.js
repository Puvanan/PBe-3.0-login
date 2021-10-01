const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 1,
            spaceBetween: -100,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: -100,
            
        },
        768: {
            slidesPerView: 1,
            spaceBetween: -120,
            
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    },
    on: {
        init: function() {
            checkArrow();
        },
        resize: function() {
            checkArrow();
        }
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiperNextBtn',
        prevEl: '.swiperPrevBtn',
    },
    // Navigation arrows
    
    
});

$('.announcementSlides').magnificPopup({
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



$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(window).ready(function() {
    $(".mainBody").waitForImages(function() {
        console.log("images loaded");
        $(".mainBody").addClass("multiply-dark-anim");
        $(".col-lg").addClass("fade-in-anim");
        $(".chevronContainer").addClass("fade-in-anim");
    });
    
});

$(".loginBtn").on("click", function() {
    
    // fade login text out and hide the display
    $(".loginBtnText").addClass("fade-out-login");
    setTimeout(function(){
        $(".loginBtnText").addClass("d-none");
    }, 300);
    
    // show display and fade in loader
    setTimeout(function(){
        $(".lds-ring").removeClass("d-none");
        $(".lds-ring").removeClass("fade-out-login").addClass("fade-in-login");
    }, 350);
    
    // remove loader and show login text
    
    setTimeout(function(){
        $(".lds-ring").addClass("fade-out-login");
        $(".userIdForm").addClass("fade-out-login");
    }, 1800);

    // setTimeout(function(){
    //     $(".securityPhrase").removeClass("d-none");
    //     $(".securityPhrase").removeClass("fade-out-login").addClass("fade-in-login");
    // }, 1850);
    setTimeout(function(){
        // $(".lds-ring").addClass("d-none");
        // $(".loginBtnText").removeClass("d-none");
        // $(".loginBtnText").removeClass("fade-out-login").addClass("fade-in-login");

        $(".userIdForm").addClass("d-none");
        $(".securityPhrase").removeClass("d-none");
        $(".loginHeaderTitle").text("Security Phrase");
        $(".securityPhrase").removeClass("fade-out-login").addClass("fade-in-login");
    }, 2100);
    
    // show security phrase content

});

function checkArrow() {
    var swiperPrev = document.querySelector('.swiperPrevBtn');
    var swiperNext = document.querySelector('.swiperNextBtn');
    if ( window.innerWidth < 576) {
        console.log('Success', window.innerWidth);
        swiperPrev.classList.add("swiper-button-disabled");
        swiperNext.classList.add("swiper-button-disabled");
    } else {
        swiperPrev.classList.remove("swiper-button-disabled");
        swiperNext.classList.remove("swiper-button-disabled");
    }
}