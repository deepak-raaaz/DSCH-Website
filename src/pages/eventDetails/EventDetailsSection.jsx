import React from 'react'
import dateFormat from "dateformat";


function EventDetailsSection(props) {
  return (
    <section
                className="h-auto  max-md:h-auto overflow-hidden  max-md:max-h-none ">
                <div className="max-w-screen-xl mx-auto  p-4 ">
                    <h1 className="text-5xl max-md:text-3xl  font-semibold text-slate-900 dark:text-white">{props.title}</h1>
                    <p className="line-clamp-8 text-lg my-4 text-slate-700 dark:text-slate-300">{props.description}
                    </p>
                    <div className="my-6 grid grid-cols-12 gap-6 ">
                        {/* <!-- phone number contact button --> */}
                        <div className="flex items-center col-span-4 max-md:col-span-6 max-sm:col-span-12">
                            <div
                                className="bg-brand-500-main w-14 h-14 flex justify-center items-center overflow-hidden rounded-lg">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59995 3.20001C8.7163 3.20001 7.99995 3.91636 7.99995 4.80001V6.40001H6.39995C4.63264 6.40001 3.19995 7.8327 3.19995 9.60001V25.6C3.19995 27.3673 4.63264 28.8 6.39995 28.8H25.5999C27.3673 28.8 28.7999 27.3673 28.7999 25.6V9.60001C28.7999 7.8327 27.3673 6.40001 25.5999 6.40001H24V4.80001C24 3.91636 23.2836 3.20001 22.4 3.20001C21.5163 3.20001 20.7999 3.91636 20.7999 4.80001V6.40001H11.2V4.80001C11.2 3.91636 10.4836 3.20001 9.59995 3.20001ZM9.59995 11.2C8.7163 11.2 7.99995 11.9164 7.99995 12.8C7.99995 13.6837 8.7163 14.4 9.59995 14.4H22.4C23.2836 14.4 24 13.6837 24 12.8C24 11.9164 23.2836 11.2 22.4 11.2H9.59995Z" fill="white" />
                                </svg>

                            </div>
                            <div className="mx-6 ">
                                <span className="text-slate-900 dark:text-slate-400 font-medium">Date and Time</span><br />
                                <span className="text-slate-900 dark:text-slate-400">{dateFormat(props.date, "mmm dS, yyyy")} {dateFormat(props.time, "hh:MM TT")}</span>
                            </div>
                        </div>
                        {/* <!-- email contact button  --> */}
                        <div className="flex items-center col-span-4 max-md:col-span-6 max-sm:col-span-12">
                            <div
                                className="bg-brand-500-main w-14 h-14 flex justify-center items-center overflow-hidden rounded-lg">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58021 6.48042C12.9541 2.10654 20.0455 2.10654 24.4194 6.48042C28.7933 10.8543 28.7933 17.9457 24.4194 22.3196L16.4998 30.2392L8.58021 22.3196C4.20634 17.9457 4.20634 10.8543 8.58021 6.48042ZM16.4998 17.6C18.2671 17.6 19.6998 16.1673 19.6998 14.4C19.6998 12.6327 18.2671 11.2 16.4998 11.2C14.7325 11.2 13.2998 12.6327 13.2998 14.4C13.2998 16.1673 14.7325 17.6 16.4998 17.6Z" fill="white" />
                                </svg>

                            </div>
                            <div className="mx-6">
                                <span className="text-slate-900 dark:text-slate-400 font-medium">Venue</span><br />
                                <span className="text-slate-900 dark:text-slate-400">{"will reveal soon" || props.venue}</span>
                            </div>
                        </div>
                        {/* <!-- email contact button  --> */}
                        <div className="flex items-center col-span-4 max-md:col-span-6 max-sm:col-span-12">
                            <div
                                className="bg-brand-500-main w-14 h-14 flex justify-center items-center overflow-hidden rounded-lg">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 28.8C23.0694 28.8 28.8002 23.0693 28.8002 16C28.8002 8.93077 23.0694 3.20001 16.0002 3.20001C8.93095 3.20001 3.2002 8.93077 3.2002 16C3.2002 23.0693 8.93095 28.8 16.0002 28.8ZM11.2002 8.00001C10.3166 8.00001 9.60024 8.71636 9.60024 9.60001C9.60024 10.4837 10.3166 11.2 11.2002 11.2H12.8002C13.9847 11.2 15.0188 11.8435 15.5721 12.8H11.2002C10.3166 12.8 9.60024 13.5164 9.60024 14.4C9.60024 15.2837 10.3166 16 11.2002 16H15.5721C15.0188 16.9565 13.9847 17.6 12.8002 17.6H11.2002C10.5531 17.6 9.96968 17.9898 9.72203 18.5877C9.47438 19.1856 9.61127 19.8738 10.0689 20.3314L14.8689 25.1314C15.4937 25.7562 16.5068 25.7562 17.1316 25.1314C17.7565 24.5065 17.7565 23.4935 17.1316 22.8686L14.758 20.495C16.8358 19.8282 18.4508 18.1283 18.9986 16H20.8002C21.6839 16 22.4002 15.2837 22.4002 14.4C22.4002 13.5164 21.6839 12.8 20.8002 12.8H18.9986C18.8525 12.2324 18.6305 11.6952 18.344 11.2H20.8002C21.6839 11.2 22.4002 10.4837 22.4002 9.60001C22.4002 8.71636 21.6839 8.00001 20.8002 8.00001H11.2002Z" fill="white" />
                                </svg>

                            </div>
                            <div className="mx-6">
                                <span className="text-slate-900 dark:text-slate-400 font-medium">Registration Fee</span><br />
                                <span className="text-slate-900 dark:text-slate-400">{props.fee}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default EventDetailsSection