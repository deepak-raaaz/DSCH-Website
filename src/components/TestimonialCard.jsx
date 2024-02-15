import React from 'react'
import { Avatar } from 'flowbite-react'


function TestimonialCard(props) {
    return (
        <div
            className="overflow-hidden rounded-2xl p-4 mx-2  w-[16rem] border-slate-300 dark:border-slate-800 border-2 dark:bg-slate-900">
            <div className="flex items-center">
                   <Avatar alt="avatar of Jese" rounded />
                <div className="ms-4">
                    <h4 className="text-lg text-slate-900 line-clamp-1 dark:text-white">{props.name}
                    </h4>
                    <span
                        className="text-slate-700 text-sm line-clamp-1 dark:text-slate-300">{props.department}</span>
                </div>
            </div>
            <div className="flex items-center mt-3 mb-2">
                {
                    Array.from({ length: props.reviewStar }, (_, index) => (
                        <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))
                }
                {
                    Array.from({ length: (5 - props.reviewStar) }, (_, index) => (
                        <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))
                }


            </div>
            <p className="text-left text-slate-900 mx-1 text-sm line-clamp-[8] dark:text-slate-400">
                {props.reviewComment}</p>
        </div>
    )
}

export default TestimonialCard