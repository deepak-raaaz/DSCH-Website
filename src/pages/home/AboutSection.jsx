import { Avatar } from 'flowbite-react'
import ProfileImages1 from '../../assets/images/profile-picture-2.jpg'
import AboutImageLight from '../../assets/images/ds-img.svg'
import AboutImageDark from '../../assets/images/ds-img-dark.svg'

import React from 'react'
import { Link } from 'react-router-dom'

function AboutSection(props) {
  return (
    <section id="about" className={` h-[100vh]  max-md:h-auto  overflow-hidden max-h-[45rem] min-h-[40rem] max-md:max-h-none pt-[7rem] max-md:pt-5 ${props.className}`}>
        <div className="max-w-screen-xl grid grid-cols-12 gap-8 mx-auto p-4">
            <div className="col-span-12 md:col-span-6 order-2 max-md:order-1">
                <h1 className="text-lg tracking-widest font-semibold text-brand-600 ms-1">About us</h1>
                <h1 className="text-5xl max-md:text-3xl font-semibold text-slate-900 dark:text-white">Data Science Club HIT</h1>
                <p className="line-clamp-8 text-lg my-4 text-slate-700 dark:text-slate-300">Data Science Club of HIT is a community driven by curiosity and passion. Founded in 2020 by passionate seniors with the sole aim of imparting quality knowledge at dirt cheap price. Dsch club came a long way since that, now there's no looking back. Interactive workshops, engaging events, and collaborative learning, we're hell bent on shaping a future where data drives positive change.</p>
                <Avatar.Group>
                            <Avatar img={ProfileImages1} rounded stacked />
                            <Avatar img={ProfileImages1} rounded stacked />
                            <Avatar img={ProfileImages1} rounded stacked />
                            <Avatar img={ProfileImages1} rounded stacked />
                            <Avatar.Counter total={15} href="#" />
                        </Avatar.Group>
                <div className={`my-8 ${ props.button}`}>
                    <Link type="button" to="/about"
                        className="text-white bg-brand-500-main hover:bg-brand-600  focus:outline-none text-center inline-flex items-center  font-medium rounded-lg text-sm px-4 py-2  dark:bg-brand-600 dark:hover:bg-brand-700 ">
                        Read More
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 max-md:order-2">
                <img src={AboutImageLight} alt="about us " className="block dark:hidden"></img>
                <img src={AboutImageDark} alt="about us" className="hidden dark:block"></img>
            </div>
        </div>
    </section>
  )
}

export default AboutSection