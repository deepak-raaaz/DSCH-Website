import React from 'react'
import { Button, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse,  NavbarToggle } from 'flowbite-react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';

const customTheme = {
    link: {
        active: {
            "on": "max-md:my-1 text-base text-white bg-brand-600 rounded md:bg-transparent md:text-brand-600 md:dark:text-brand-500-main",

            "off": "max-md:my-1 text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-600 md:dark:hover:text-brand-500-main dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        },
    },


};
const buttonTheme = {
    color: {
        primary: 'mx-3 text-white bg-brand-500-main hover:bg-brand-600   font-medium dark:bg-brand-600 dark:hover:bg-brand-700 ',
    },

}



function RootLayout() {
    return (
        <>
            <div className='bg-white border-gray-200 dark:bg-gray-950  fixed w-full z-20 top-0 start-0  dark:border-gray-600 '>
                <Navbar fluid rounded className='max-w-screen-xl  mx-auto text-lg dark:bg-transparent' theme={customTheme}>
                    <NavbarBrand >
                        <Link to="/"> 
                        <BrandLogo />
                        </Link>
                        <Link to="/">
                        <span className="ms-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DSCH</span>
                        </Link>
                    </NavbarBrand>
                    <div className="flex md:order-2">
                        <DarkThemeToggle className='text-slate-900 border border-none bg-gray-200 hover:bg-brand-600 hover:text-white  font-medium   dark:border-brand-500-main dark:bg-slate-800 dark:text-white dark:hover:text-white dark:hover:bg-brand-500-main focus:outline-none focus:ring-0 ' />

                        <Button theme={buttonTheme} color='primary' className='focus:outline-none focus:ring-0'>Login</Button>
                        <NavbarToggle />
                    </div>
                    <NavbarCollapse className='max-md:bg-slate-100 max-md:mt-4 max-md:px-4 max-md:pb-4 rounded-lg dark:bg-slate-950 md:dark:bg-slate-950 dark:border-gray-700 md:border-0 border border-gray-100'>
                        <NavLink to="/" active className='navlink'>
                            Home
                        </NavLink>
                        <NavLink to="/events" className="navlink">Events</NavLink>
                        <NavLink to="/members" className="navlink">Members</NavLink>
                        <NavLink to="/about" className="navlink">About</NavLink>
                        <NavLink to="/contact" className="navlink">Contact</NavLink>
                    </NavbarCollapse>
                </Navbar>
            </div>


            <Outlet />


            <footer className="  overflow-hidden  py-[2rem]">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="flex items-center flex-row max-md:flex-col justify-between ">
                        {/* <!-- logo  --> */}
                        <Link href="index.html" className="flex items-center space-x-3 rtl:space-x-reverse">

                            <BrandLogo />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DSCH</span>
                        </Link>
                        {/* <!-- list  --> */}
                        <div>
                            <ul className="flex flex-row max-md:flex-col text-center font-medium p-4 md:p-0  md:space-x-8">
                                <li>
                                    <NavLink to="/"
                                        className="navlink ">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/events"
                                        className="navlink ">Events</NavLink>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="/members"
                                        spy={true}
                                        smooth={true}
                                        offset={-70} 
                                        duration={500}
                                        className="navlink ">Members</Link>
                                </li>
                                <li>
                                    <NavLink to="/about"
                                        className="navlink ">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact"
                                        className="navlink">Contact</NavLink>
                                </li>

                            </ul>
                        </div>
                        {/* <!-- media icons  --> */}
                        <div className="flex justify-center items-center space-x-5">
                            <Link href="#">
                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="dark:hidden">
                                    <path
                                        d="M3 8H0V12H3V24H8V12H11.642L12 8H8V6.333C8 5.378 8.192 5 9.115 5H12V0H8.192C4.596 0 3 1.583 3 4.615V8Z"
                                        fill="black" />
                                </svg>
                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="dark:block hidden">
                                    <path
                                        d="M3 8H0V12H3V24H8V12H11.642L12 8H8V6.333C8 5.378 8.192 5 9.115 5H12V0H8.192C4.596 0 3 1.583 3 4.615V8Z"
                                        fill="#ffffff" />
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="dark:hidden" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                                        fill="black" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="dark:block hidden" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                                        fill="white" />
                                </svg>

                            </Link>
                            <Link href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" className="dark:hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.98 3C4.98 4.381 3.87 5.5 2.5 5.5C1.13 5.5 0.02 4.381 0.02 3C0.02 1.62 1.13 0.5 2.5 0.5C3.87 0.5 4.98 1.62 4.98 3ZM5 7.5H0V23.5H5V7.5ZM12.982 7.5H8.014V23.5H12.983V15.101C12.983 10.431 19.012 10.049 19.012 15.101V23.5H24V13.369C24 5.489 15.078 5.776 12.982 9.655V7.5Z"
                                        fill="black" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" className="dark:block hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.98 3C4.98 4.381 3.87 5.5 2.5 5.5C1.13 5.5 0.02 4.381 0.02 3C0.02 1.62 1.13 0.5 2.5 0.5C3.87 0.5 4.98 1.62 4.98 3ZM5 7.5H0V23.5H5V7.5ZM12.982 7.5H8.014V23.5H12.983V15.101C12.983 10.431 19.012 10.049 19.012 15.101V23.5H24V13.369C24 5.489 15.078 5.776 12.982 9.655V7.5Z"
                                        fill="white" />
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" className="dark:hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 0.295898C5.374 0.295898 0 5.6689 0 12.2959C0 17.5979 3.438 22.0959 8.207 23.6829C8.806 23.7939 9 23.4219 9 23.1059V20.8719C5.662 21.5979 4.967 19.4559 4.967 19.4559C4.421 18.0689 3.634 17.6999 3.634 17.6999C2.545 16.9549 3.717 16.9709 3.717 16.9709C4.922 17.0549 5.556 18.2079 5.556 18.2079C6.626 20.0419 8.363 19.5119 9.048 19.2049C9.155 18.4299 9.466 17.8999 9.81 17.6009C7.145 17.2959 4.343 16.2669 4.343 11.6699C4.343 10.3589 4.812 9.2889 5.579 8.4489C5.455 8.1459 5.044 6.9249 5.696 5.2729C5.696 5.2729 6.704 4.9509 8.997 6.5029C9.954 6.2369 10.98 6.1039 12 6.0989C13.02 6.1039 14.047 6.2369 15.006 6.5029C17.297 4.9509 18.303 5.2729 18.303 5.2729C18.956 6.9259 18.545 8.1469 18.421 8.4489C19.191 9.2889 19.656 10.3599 19.656 11.6699C19.656 16.2789 16.849 17.2939 14.177 17.5909C14.607 17.9629 15 18.6929 15 19.8129V23.1059C15 23.4249 15.192 23.7999 15.801 23.6819C20.566 22.0929 24 17.5959 24 12.2959C24 5.6689 18.627 0.295898 12 0.295898Z"
                                        fill="black" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" className="dark:block hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 0.295898C5.374 0.295898 0 5.6689 0 12.2959C0 17.5979 3.438 22.0959 8.207 23.6829C8.806 23.7939 9 23.4219 9 23.1059V20.8719C5.662 21.5979 4.967 19.4559 4.967 19.4559C4.421 18.0689 3.634 17.6999 3.634 17.6999C2.545 16.9549 3.717 16.9709 3.717 16.9709C4.922 17.0549 5.556 18.2079 5.556 18.2079C6.626 20.0419 8.363 19.5119 9.048 19.2049C9.155 18.4299 9.466 17.8999 9.81 17.6009C7.145 17.2959 4.343 16.2669 4.343 11.6699C4.343 10.3589 4.812 9.2889 5.579 8.4489C5.455 8.1459 5.044 6.9249 5.696 5.2729C5.696 5.2729 6.704 4.9509 8.997 6.5029C9.954 6.2369 10.98 6.1039 12 6.0989C13.02 6.1039 14.047 6.2369 15.006 6.5029C17.297 4.9509 18.303 5.2729 18.303 5.2729C18.956 6.9259 18.545 8.1469 18.421 8.4489C19.191 9.2889 19.656 10.3599 19.656 11.6699C19.656 16.2789 16.849 17.2939 14.177 17.5909C14.607 17.9629 15 18.6929 15 19.8129V23.1059C15 23.4249 15.192 23.7999 15.801 23.6819C20.566 22.0929 24 17.5959 24 12.2959C24 5.6689 18.627 0.295898 12 0.295898Z"
                                        fill="white" />
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="dark:hidden" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M22.288 17.5H1.712C0.767 17.5 0 16.733 0 15.788V2.212C0 1.267 0.767 0.5 1.712 0.5H22.288C23.233 0.5 24 1.267 24 2.212V15.788C24 16.733 23.233 17.5 22.288 17.5ZM12 11.414L2.658 4.931L2.638 16.5H21.322V4.931L12 11.414ZM20.869 1.5H3.08L12 7.729C12 7.729 18.252 3.323 20.869 1.5Z"
                                        fill="black" />
                                </svg>
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="dark:block hidden" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M22.288 17.5H1.712C0.767 17.5 0 16.733 0 15.788V2.212C0 1.267 0.767 0.5 1.712 0.5H22.288C23.233 0.5 24 1.267 24 2.212V15.788C24 16.733 23.233 17.5 22.288 17.5ZM12 11.414L2.658 4.931L2.638 16.5H21.322V4.931L12 11.414ZM20.869 1.5H3.08L12 7.729C12 7.729 18.252 3.323 20.869 1.5Z"
                                        fill="white" />
                                </svg>

                            </Link>

                        </div>
                    </div>
                    <div className="h-[2px] w-full bg-slate-200 dark:bg-slate-800 my-6"></div>
                    <div className="flex justify-between max-md:flex-col max-md:justify-center">
                        <span className="text-slate-600 dark:text-slate-500 text-center">© 2024 Data Science Club HIT. <br className="hidden max-md:block" />  All Rights Reserved.</span>
                        <div className="space-x-4 flex justify-center max-md:my-4 ">
                            <span className="text-slate-600 dark:text-slate-500">
                                <Link href="#">Privacy Policy</Link>
                            </span>
                            <span className="text-slate-600 dark:text-slate-500">
                                <Link href="#">Terms & Conditions</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default RootLayout