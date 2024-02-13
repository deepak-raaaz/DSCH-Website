import React from 'react'
import TestimonialCard from '../../components/TestimonialCard'

function TestmonialSection() {
  return (
    <section className="h-[120vh] max-md:h-auto overflow-hidden max-h-[55rem] min-h-[40rem] max-md:max-h-none pt-[5rem] max-md:pt-5">
        <div className="max-w-screen-xl mx-auto p-4">
            <div className="flex items-center max-md:items-start flex-col">
                <h1 className="text-lg tracking-widest font-semibold text-brand-600 ms-1 uppercase">Testimonials</h1>
                <h1 className="text-5xl max-md:text-3xl font-semibold text-slate-900 dark:text-white">Words From Our Community</h1>
                <p className="line-clamp-8 text-lg my-4 text-slate-700 dark:text-slate-300 text-center max-md:text-start w-[80%] max-md:w-full">Let's see what they got to say after attending some of our enriching sessions.</p>
            </div>
            <div className=" my-8">
                <div className="  w-full">
                    <div x-data="{}" x-init="$nextTick(() => {
                                let ul = $refs.logos;
                                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                                ul.nextSibling.setAttribute('aria-hidden', 'true');
                            })" className="w-full inline-flex flex-nowrap my-2 ">
                        <ul x-ref="logos"
                            className=" flex items-center justify-center md:justify-start animate-infinite-scroll">
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                        </ul>
                        <ul x-ref="logos"
                            className="flex items-center justify-center md:justify-start animate-infinite-scroll "
                            aria-hidden="true">
                           <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                        </ul>
                    </div>

                    <div x-data="{}" x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })" className="w-full inline-flex flex-nowrap my-2">
                        <ul x-ref="logos"
                            className=" flex items-center justify-center md:justify-start animate-infinite-scroll2">
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                        </ul>
                        <ul x-ref="logos"
                            className="flex items-center justify-center md:justify-start animate-infinite-scroll2 "
                            aria-hidden="true">
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                            <li>
                                <TestimonialCard/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestmonialSection