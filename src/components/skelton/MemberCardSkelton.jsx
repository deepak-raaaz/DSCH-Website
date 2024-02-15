import React from 'react'

function MemberCardSkelton() {
    return (
        <div role="status"
            class="swiper-slide animate-pulse overflow-hidden rounded-2xl  border-gray-200 h-[25rem] pb-4 dark:border-gray-700 border-2 shadow-md relative">
            <div class="h-[18rem] overflow-hidden bg-gray-300 dark:bg-gray-700 flex justify-center items-center ">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
            </div>
            <div class="absolute w-full">
                <div
                    class="bg-gray-400 h-16 dark:bg-gray-800 flex flex-col justify-center items-center py-2 text-white mx-4 rounded-2xl -mt-8">
                </div>
            </div>
            <div class=" pt-[3rem] relative flex justify-center items-center">
                <div>
                    <button type="button"
                        class="h-11 w-11 bg-gray-200 dark:bg-gray-700 focus:outline-none  font-medium rounded-xl text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-slate-500 dark:text-slate-500 dark:hover:text-white  dark:hover:bg-slate-800">
                        
                    </button>
                </div>
                <div>
                    <button type="button"
                        class="h-11 w-11 bg-gray-200 dark:bg-gray-700 focus:outline-none  font-medium rounded-xl text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-slate-500 dark:text-slate-500 dark:hover:text-white  dark:hover:bg-slate-800">
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MemberCardSkelton