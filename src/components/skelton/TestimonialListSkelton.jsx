import React from 'react'
import TestimonialCardSkelton from './TestimonialCardSkelton';

function TestmonialListSkelton() {
    const testimonialList = [1, 2, 3, 4, 5, 6,7,8,9,10];

    return (
        <div role="status" className=" my-8 animate-pulse">
            <div className="  w-full">
                <div x-data="{}" x-init="$nextTick(() => {
                                let ul = $refs.logos;
                                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                                ul.nextSibling.setAttribute('aria-hidden', 'true');
                            })" className="w-full inline-flex flex-nowrap my-2 ">
                    <ul x-ref="logos"
                        className=" flex items-center justify-center md:justify-start animate-infinite-scroll">
                        {
                            testimonialList.map((items, index) => (
                                <>
                                    {
                                        index % 2 === 0 &&
                                        <li>
                                            <TestimonialCardSkelton />
                                        </li>
                                    }

                                </>
                            ))
                        }
                    </ul>
                    <ul x-ref="logos"
                        className="flex items-center justify-center md:justify-start animate-infinite-scroll "
                        aria-hidden="true">
                        {
                            testimonialList.map((items, index) => (
                                <>
                                    {
                                        index % 2 === 0 &&
                                        <li>
                                            <TestimonialCardSkelton />
                                        </li>
                                    }

                                </>
                            ))
                        }
                    </ul>
                </div>

                <div x-data="{}" x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })" className="w-full inline-flex flex-nowrap my-2">
                    <ul x-ref="logos"
                        className=" flex items-center justify-center md:justify-start animate-infinite-scroll2">
                        {
                            testimonialList.map((items, index) => (
                                <>
                                    {
                                        index % 2 !== 0 &&
                                        <li>
                                            <TestimonialCardSkelton />
                                        </li>
                                    }

                                </>
                            ))
                        }
                    </ul>
                    <ul x-ref="logos"
                        className="flex items-center justify-center md:justify-start animate-infinite-scroll2 "
                        aria-hidden="true">
                        {
                            testimonialList.map((items, index) => (
                                <>
                                    {
                                        index % 2 !== 0 &&
                                        <li>
                                            <TestimonialCardSkelton />
                                        </li>
                                    }

                                </>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TestmonialListSkelton