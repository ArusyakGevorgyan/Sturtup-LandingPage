window.addEventListener('load', () => {
    
      try {
        const swiper = new Swiper('.swiper-container', {
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 13,
            loop: true,
             autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            }, 
            
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                571: {
                    slidesPerView: 1,
                },
                857: {
                    slidesPerView: 2,
                },
                1125: {
                    slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                }
              }
        });
    
         const swiperSlide = document.querySelectorAll('.swiper-slide');
    
        swiperSlide.forEach(slide => {
            slide.addEventListener('mouseover', () => {
                swiper.autoplay.stop()
            });
    
            slide.addEventListener('mouseleave', () => {
                swiper.autoplay.start()
            });
        })
    }
    catch {
        console.log('error swiper');
    } 


});