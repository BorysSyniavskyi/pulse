
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    center: true,
    nav: false,
    
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