import React from 'react'
import ProfileImages1 from '../../assets/images/profile-picture-2.jpg'
import HeroImageLight from '../../assets/images/hero-section-dsch.png'
import HeroImageDark from '../../assets/images/hero-section-dsch-dark.png'
import { Avatar } from 'flowbite-react'
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <>
            <section className="h-[100vh]  max-md:h-auto overflow-hidden max-h-[45rem] min-h-[40rem] max-md:max-h-none  pt-[7rem] max-md:pt-[5rem]">
                <div className="max-w-screen-xl grid grid-cols-12 gap-8 mx-auto  p-4 ">
                    <div className="col-span-12 md:col-span-6 my-16 max-md:my-1 order-1 max-md:order-2">
                        <h1 className="text-lg tracking-widest font-semibold text-brand-600 ms-1">DSCH</h1>
                        <h1 className="text-5xl max-md:text-3xl font-semibold text-slate-900 dark:text-white ">Empowered by Data, Led by Insight</h1>
                        <p className="line-clamp-4 text-lg my-4 text-slate-700 dark:text-slate-300">Welcome to a community
                            passionate about delving into the realm of data. Our Data Science Club is a hub for enthusiasts,
                            beginners, and experts alike, dedicated to exploring the forefront of technology, predictive
                            analytics, machine learning, and more. Dive into workshops, discussions, and projects that unravel
                            the mysteries hidden within data. Whether you're a novice or a seasoned professional, join us in
                            discovering the endless possibilities within the world of data science.</p>
                        <Avatar.Group>
                            <Avatar img={ProfileImages1} rounded stacked />
                            <Avatar img={ProfileImages1} rounded stacked />
                            <Avatar img={ProfileImages1} rounded stacked />
                            <Avatar img={ProfileImages1} rounded stacked />
                            <Avatar.Counter total={15} href="#" />
                        </Avatar.Group>
                        <div className="my-8 space-x-3">
                            <Link type="button" to="/"
                                className="text-white bg-brand-500-main hover:bg-brand-600  focus:outline-none text-center inline-flex items-center  font-medium rounded-lg text-sm px-4 py-2  dark:bg-brand-600 dark:hover:bg-brand-700 ">
                                Join Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                            <Link type="button" to="/about"
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
                    <div className="col-span-12 md:col-span-6 flex justify-center items-center order-2  max-md:px-0">
                        <img src={HeroImageLight} alt="DSCH Club Moments" className="dark:hidden"></img>
                        <img src={HeroImageDark} alt="DSCH Club Moments" className="dark:block hidden"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection