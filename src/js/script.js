$(document).ready(function() {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        nav: false,
        controls: false,
        responsive: {
            // 640: {
            //     mouseDrag: true,
            //     edgePadding: 200,
            //     gutter: 200,
            //     items: 1
            // },
            320: {
                mouseDrag: true,
            },
            992: {
                mouseDrag: false,
            }
          }
        
        
        // rewind: true

        // responsive: {
        //   640: {
        //     edgePadding: 20,
        //     gutter: 20,
        //     items: 2
        //   },
        //   700: {
        //     gutter: 30
        //   },
        //   900: {
        //     items: 3
        //   }
    });


    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link').each( function(i){
    //     $(this)
    //     .on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     });
    // })
    // $('.catalog-item__back').each( function(i){
    //     $(this)
    //     .on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     });
    // })
    function toggleSlide(item) {
        $(item).each( function(i){
                $(this)
                .on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
                });
            });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

});
