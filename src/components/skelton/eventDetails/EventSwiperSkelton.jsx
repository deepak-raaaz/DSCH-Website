import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';


function EventSwiperSkelton() {
    const swiperlist = [1, 2, 3];

    return (
        <section
            className="h-auto  max-md:h-auto  overflow-hidden pt-[4rem]" >
            <div className="max-w-screen-xl mx-auto p-4">
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
                        {
                            swiperlist.map((items) => (
                                <SwiperSlide id='items'>
                                    <div
                                        className="space-y-1 col-span-4 max-md:col-span-6 max-sm:col-span-12 shadow-md bg-white z-0 my-0 overflow-hidden rounded-2xl p-2  border-slate-300 dark:border-slate-800 border-2 dark:bg-slate-900 aspect-square">
                                        <div className="flex items-center justify-center  bg-gray-300 dark:bg-gray-700 aspect-square w-full max-md:w-full rounded-2xl overflow-hidden">
                                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>
            </div>
        </section >

    )
}

export default EventSwiperSkelton