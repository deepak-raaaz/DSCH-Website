import React, { useEffect } from 'react'
// import EventPoster from '../../assets/images/event-poster-1.jpg'
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/constants';
import axios from 'axios';
import dateFormat from "dateformat";
import UpcomingEventSkelton from '../../components/skelton/UpComingEventSkelton';
import { Link } from 'react-router-dom';


function UpcomingEventSection() {

    const [upComingEvent, dispatch] = useStateProvider();

    useEffect(() => {
        const api_url = process.env.REACT_APP_API_LINK;
        const getUpcomingEvent = async () => {
            await axios.get(`${api_url}sheetName=upcoming-event&action=getUpcomingEvent`)
                .then(response => {
                    // console.log('upcoming call');
                    //   console.log(response);
                    const upComingEvent = response.data.data;

                    dispatch({ type: reducerCases.SET_UPCOMING_EVENT, upComingEvent });
                })
                .catch(error => {
                    console.log(error);
                })

        }
        getUpcomingEvent();
    }, [dispatch]);
    // console.log(Object.entries(upComingEvent.upComingEvent).length === 0);

    return (
        <>
            {
                Object.entries(upComingEvent.upComingEvent).length === 0
                    ?
                    <UpcomingEventSkelton />
                    :
                    <>
                        <section
                            className="h-[100vh]  max-md:h-auto overflow-hidden max-h-[44rem] min-h-[40rem] max-md:max-h-none  pt-[7rem] max-md:pt-[5rem]">
                            <div className="max-w-screen-xl grid grid-cols-12 gap-8 mx-auto  p-4 ">
                                <div className="col-span-12 md:col-span-6 my-16 max-md:my-1 order-1 max-md:order-2">
                                    <h1 className="text-lg tracking-widest font-semibold text-brand-600 ms-1 uppercase">upcoming event</h1>
                                    <h1 className="text-5xl max-md:text-3xl font-semibold text-slate-900 dark:text-white ">{upComingEvent.upComingEvent.title}</h1>
                                    <p className="line-clamp-4 text-lg my-4 text-slate-700 dark:text-slate-300">{upComingEvent.upComingEvent.description}</p>

                                    <div className="space-y-2">
                                        <div className="flex flex-row items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
                                                    fill="#64748B" />
                                            </svg>
                                            <span className="text-slate-700 dark:text-slate-400 ms-3 me-2">Date :</span>
                                            <span className="text-slate-700 dark:text-slate-400 font-semibold">{dateFormat(upComingEvent.upComingEvent.date, "mmm dS, yyyy")}</span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z"
                                                    fill="#64748B" />
                                            </svg>
                                            <span className="text-slate-700 dark:text-slate-400 ms-3 me-2">Time :</span>
                                            <span className="text-slate-700 dark:text-slate-400 font-semibold">{dateFormat(upComingEvent.upComingEvent.time, "hh:MM TT")}</span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.00003 5C6.44774 5 6.00003 5.44772 6.00003 6C6.00003 6.55228 6.44774 7 7.00003 7H8.00003C8.74031 7 9.38666 7.4022 9.73246 8H7.00003C6.44774 8 6.00003 8.44772 6.00003 9C6.00003 9.55228 6.44774 10 7.00003 10H9.73246C9.38665 10.5978 8.74031 11 8.00003 11H7.00003C6.59557 11 6.23093 11.2436 6.07615 11.6173C5.92137 11.991 6.00692 12.4211 6.29292 12.7071L9.29292 15.7071C9.68345 16.0976 10.3166 16.0976 10.7071 15.7071C11.0977 15.3166 11.0977 14.6834 10.7071 14.2929L9.22363 12.8094C10.5222 12.3926 11.5316 11.3302 11.874 10H13C13.5523 10 14 9.55228 14 9C14 8.44772 13.5523 8 13 8H11.874C11.7827 7.64523 11.6439 7.30951 11.4649 7H13C13.5523 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H7.00003Z"
                                                    fill="#64748B" />
                                            </svg>

                                            <span className="text-slate-700 dark:text-slate-400 ms-3 me-2">Registration Fee :</span>
                                            <span className="text-slate-700 dark:text-slate-400 font-semibold">{upComingEvent.upComingEvent.fee !== undefined ? (upComingEvent.upComingEvent.fee !== 'Free' ? `₹ ${upComingEvent.upComingEvent.fee}` : "FREE") : ""}</span>
                                        </div>

                                    </div>


                                    <div className="my-8 space-x-3">
                                        <Link to={upComingEvent.upComingEvent.registerUrl}
                                            className="text-white bg-brand-500-main hover:bg-brand-600  focus:outline-none text-center inline-flex items-center  font-medium rounded-lg text-sm px-4 py-2  dark:bg-brand-600 dark:hover:bg-brand-700 ">
                                            Register Now
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" width="20" height="20" viewBox="0 0 20 20"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                                                    fill="white" />
                                                <path d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                                                    fill="white" />
                                            </svg>

                                        </Link>
                                        <Link to="/events/upcoming-event"
                                            className="text-slate-900 dark:text-white bg-slate-200 hover:bg-slate-300  focus:outline-none text-center inline-flex items-center  font-medium rounded-lg text-sm px-4 py-2  dark:bg-slate-800 dark:hover:bg-slate-700 ">
                                            Read More
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 flex justify-center items-center order-2 max-md:order-1">
                                    <img src={upComingEvent.upComingEvent.thumbnailUrl} alt="" className="w-[80%] max-md:w-full rounded-2xl overflow-hidden" />
                                </div>
                            </div>
                        </section>
                    </>

            }
        </>
    )
}

export default UpcomingEventSection