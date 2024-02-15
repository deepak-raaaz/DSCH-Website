import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';
import SwiperImageCard from './SwiperImageCard';


function CustomSwiper() {
    return (
        <div class="relative my-8">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    560: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    790: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SwiperImageCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImageCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImageCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImageCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImageCard />
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default CustomSwiper