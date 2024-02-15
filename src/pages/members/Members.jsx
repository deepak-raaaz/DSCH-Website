import React, { useEffect } from 'react'
import MemberCard from '../../components/MemberCard'
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';
import MemberCardSkelton from '../../components/skelton/MemberCardSkelton';

function Members() {

    const [members, dispatch] = useStateProvider();

    useEffect(() => {
        const api_url = process.env.REACT_APP_API_LINK;
        const getMembers = async () => {
            await axios.get(`${api_url}action=members`)
                .then(response => {
                    console.log(response);
                    console.log('testi');
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
    console.log(members);

    const memberList = [1,2,3,4,5,6,7,8];

    return (
        <section id="member" class="h-auto max-md:h-auto overflow-hidden  min-h-[100vh] max-md:max-h-none pt-[5rem] ">
            <div class="max-w-screen-xl mx-auto p-4">
                <div class="flex items-center max-md:items-start flex-col">
                    <h1 class="text-lg tracking-widest font-semibold text-brand-600 ms-1 uppercase">Say Hello</h1>
                    <h1 class="text-5xl max-md:text-3xl font-semibold text-slate-900 dark:text-white">Team Members</h1>
                    <p class="line-clamp-8 text-lg my-4 text-slate-700 dark:text-slate-300">They do not have a magic wand but they sure do possess genius brains.</p>
                </div>
                <div class="relative grid grid-cols-12 gap-6 my-8 ">
                    {
                        members.members.length === 0 
                        ?
                        <> 
                        {
                            memberList.map((items) => (
                                <div className='col-span-3 max-md:col-span-6 max-lg:col-span-4 max-sm:col-span-12'>
                                <MemberCardSkelton/>
                                </div>
                            ))
                        }
                        </>
                        :
                        <>
                        {
                            members.members.map((items) => (
                                <div className='col-span-3 max-md:col-span-6 max-lg:col-span-4 max-sm:col-span-12'>
                                    <MemberCard id={items.id} name={items.name} profileUrl={items.profileUrl} position={items.position} github={items.github} linkedin={items.linkedin}/>
                                </div>
                            ))
                        }
                        </>
                    }

                </div>
            </div>
        </section>
    )
}

export default Members