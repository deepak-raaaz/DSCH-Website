import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import MemberCard from '../../components/MemberCard';

export default function MemberSection() {
    return (
        <section id="member" class="h-[100vh] max-md:h-auto overflow-hidden max-h-[45rem] min-h-[40rem] max-md:max-h-none pt-[5rem] max-md:pt-5">
            <div class="max-w-screen-xl mx-auto p-4">
                <div class="flex items-center max-md:items-start flex-col">
                    <h1 class="text-lg tracking-widest font-semibold text-brand-600 ms-1 uppercase">Say Hello</h1>
                    <h1 class="text-5xl max-md:text-3xl font-semibold text-slate-900 dark:text-white">Team Members</h1>
                    <p class="line-clamp-8 text-lg my-4 text-slate-700 dark:text-slate-300">They do not have a magic wand but they sure do possess genius brains.</p>
                </div>
                <div class="relative my-8">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
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
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            790: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <MemberCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MemberCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MemberCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MemberCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MemberCard/>
                        </SwiperSlide>
                        
                    </Swiper>
                    
                </div>
            </div>
        </section>
    );
}
