import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import MemberCard from '../../components/MemberCard';
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';
import MemberCardSkelton from '../../components/skelton/MemberCardSkelton';

export default function MemberSection() {

    const [members, dispatch] = useStateProvider();

    useEffect(() => {
        const api_url = process.env.REACT_APP_API_LINK;
        const getMembers = async () => {
            await axios.get(`${api_url}action=members`)
                .then(response => {
                    // console.log(response);
                    // console.log('testi');
                    const members = response.data.data.map((items) => {
                        return {
                            id: items._id,
                            name: items.name,
                            department: items.department,
                            position: items.position,
                            profileUrl: items.profileUrl,
                            linkedin: items.linkedin,
                            github: items.github,
                        }
                    });
                    dispatch({ type: reducerCases.SET_MEMBERS, members });
                })
                .catch(error => {
                    console.log(error);
                })

        }
        getMembers();
    }, [dispatch]);
    // console.log(members);

    const memberList = [1, 2, 3, 4, 5, 6, 7, 8];

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
                        {
                            members.members.length === 0
                                ?
                                <>
                                    {
                                        memberList.map((items) => (
                                            <SwiperSlide>
                                                <MemberCardSkelton />
                                            </SwiperSlide>
                                        ))
                                    }
                                </>
                                :
                                <>
                                    {
                                        members.members.map((items) => (
                                            <SwiperSlide>
                                                <MemberCard className="!pt-0" id={items.id} name={items.name} profileUrl={items.profileUrl} position={items.position} github={items.github} linkedin={items.linkedin} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </>
                        }


                    </Swiper>

                </div>
            </div>
        </section>
    );
}
