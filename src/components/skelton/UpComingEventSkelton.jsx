import React from 'react'

function UpcomingEventSkelton() {
    return (
        <section
            role="status"
            className="h-[100vh] animate-pulse  max-md:h-auto overflow-hidden max-h-[44rem] min-h-[40rem] max-md:max-h-none  pt-[7rem] max-md:pt-[5rem]">
            <div className="max-w-screen-xl grid grid-cols-12 gap-8 mx-auto  p-4 ">
                <div className="col-span-12 md:col-span-6 my-16 max-md:my-1 order-1 max-md:order-2">
                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-3 w-48 "></div>
                    <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-3  "></div>
                    <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-5  w-[45%] "></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-3  "></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-3 "></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-3 "></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700  mb-6 w-[70%]"></div>

                    <div className="space-y-2">
                        <div className="flex flex-row items-center">
                            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-6 "></div>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700  mx-3 w-40 "></div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-6 "></div>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700  mx-3 w-20 "></div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-6 "></div>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700  mx-3 w-32 "></div>
                        </div>

                    </div>


                    <div className="my-8 space-x-3 flex ">
                        {/* button  */}
                        <div className="h-7 bg-gray-200 rounded-lg dark:bg-gray-700 w-28  "></div>
                        <div className="h-7 bg-gray-200 rounded-lg dark:bg-gray-700 mx-2 w-28  "></div>

                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 flex justify-center items-center order-2 max-md:order-1">
                    <div className="flex items-center justify-center  bg-gray-300 dark:bg-gray-700 aspect-square w-[80%] max-md:w-full rounded-2xl overflow-hidden">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default UpcomingEventSkelton