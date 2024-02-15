import React from 'react'
import MemberCard from '../../components/MemberCard'
import MemberCardSkelton from '../../components/skelton/MemberCardSkelton';

function Members() {
    const memberList = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <section id="member" class="h-auto max-md:h-auto overflow-hidden  min-h-[100vh] max-md:max-h-none pt-[5rem] max-md:pt-5">
            <div class="max-w-screen-xl mx-auto p-4">
                <div class="flex items-center max-md:items-start flex-col">
                    <h1 class="text-lg tracking-widest font-semibold text-brand-600 ms-1 uppercase">Say Hello</h1>
                    <h1 class="text-5xl max-md:text-3xl font-semibold text-slate-900 dark:text-white">Team Members</h1>
                    <p class="line-clamp-8 text-lg my-4 text-slate-700 dark:text-slate-300">They do not have a magic wand but they sure do possess genius brains.</p>
                </div>
                <div class="relative grid grid-cols-12 gap-6 my-8 ">
                    {
                        memberList.map((items) => (
                            <div className='col-span-3 max-md:col-span-6 max-lg:col-span-4 max-sm:col-span-12'>
                                {/* <MemberCard /> */}
                                <MemberCard/>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Members