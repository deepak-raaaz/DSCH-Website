import React from 'react'

function ContactSection(props) {
  return (
    <section id="contact" className={`h-[100vh] max-md:h-auto  overflow-hidden max-h-[45rem] max-md:max-h-none min-h-[40rem] pt-[5rem] max-md:pt-5 ${props.className}`}>
        <div className="max-w-screen-xl grid grid-cols-12 gap-8 mx-auto p-4">
            <div className="col-span-12 md:col-span-6 order-1">
                <h1 className="text-lg tracking-widest font-semibold text-brand-600 ms-1">Contact us</h1>
                <h1 className="text-5xl max-md:text-3xl  font-semibold text-slate-900 dark:text-white">Get In Touch With Us</h1>
                <p className="line-clamp-8 text-lg my-4 text-slate-700 dark:text-slate-300">Got questions or ideas? We'd love to hear from you! Reach out to us at DSCH for anything related to data science, workshops, events, or collaborations. Whether you're a student eager to join our community or an organization interested in partnering with us. Drop us a message and we will get back to you promptly! Your feedback and input are invaluable to us as we continue to grow and innovate.
                <br/>
                We don't want gurus we would rather have avid learners...</p>
                <div className="my-6">
                    {/* <!-- phone number contact button --> */}
                    <div className="flex items-center my-5">
                        <div
                            className="bg-brand-500-main w-14 h-14 flex justify-center items-center overflow-hidden rounded-lg">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.20001 4.79995C3.20001 3.9163 3.91636 3.19995 4.80001 3.19995H8.24461C9.02675 3.19995 9.69426 3.76541 9.82284 4.53691L11.0057 11.6343C11.1212 12.3272 10.7713 13.0143 10.143 13.3284L7.66603 14.5669C9.45211 19.0053 12.9947 22.5479 17.433 24.3339L18.6715 21.8569C18.9857 21.2287 19.6728 20.8787 20.3657 20.9942L27.463 22.1771C28.2346 22.3057 28.8 22.9732 28.8 23.7554V27.1999C28.8 28.0836 28.0837 28.7999 27.2 28.7999H24C12.5125 28.7999 3.20001 19.4875 3.20001 7.99995V4.79995Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div className="mx-6">
                            <span className="text-slate-900 dark:text-slate-400">Phone :</span><br/>
                            <span className="text-slate-900 dark:text-slate-400">+91 9876543210</span>
                        </div>
                    </div>
                    {/* <!-- email contact button  --> */}
                    <div className="flex items-center my-5">
                        <div
                            className="bg-brand-500-main w-14 h-14 flex justify-center items-center overflow-hidden rounded-lg">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.20535 9.41359L15.9999 15.8109L28.7947 9.41351C28.6982 7.73295 27.3048 6.3999 25.6 6.3999H6.40001C4.69524 6.3999 3.30183 7.73299 3.20535 9.41359Z"
                                    fill="white" />
                                <path
                                    d="M28.8 12.9885L15.9999 19.3886L3.20001 12.9886V22.3999C3.20001 24.1672 4.6327 25.5999 6.40001 25.5999H25.6C27.3673 25.5999 28.8 24.1672 28.8 22.3999V12.9885Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div className="mx-6">
                            <span className="text-slate-900 dark:text-slate-400">Email :</span><br/>
                            <span className="text-slate-900 dark:text-slate-400">example@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 order-2 justify-center flex relative">
                {/* <!-- right element  --> */}
                <div className="absolute right-12 max-md:right-0 top-0">
                    <svg width="167" height="216" viewBox="0 0 167 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="92" cy="107" r="4" fill="#94A3B8" />
                        <circle cx="92" cy="122" r="4" fill="#94A3B8" />
                        <circle cx="92" cy="137" r="4" fill="#94A3B8" />
                        <circle cx="92" cy="152" r="4" fill="#94A3B8" />
                        <circle cx="92" cy="167" r="4" fill="#94A3B8" />
                        <circle cx="92" cy="182" r="4" fill="#94A3B8" />
                        <circle cx="92" cy="197" r="4" fill="#94A3B8" />
                        <circle cx="92" cy="212" r="4" fill="#94A3B8" />
                        <circle cx="109" cy="107" r="4" fill="#94A3B8" />
                        <circle cx="109" cy="122" r="4" fill="#94A3B8" />
                        <circle cx="109" cy="137" r="4" fill="#94A3B8" />
                        <circle cx="109" cy="152" r="4" fill="#94A3B8" />
                        <circle cx="109" cy="167" r="4" fill="#94A3B8" />
                        <circle cx="109" cy="182" r="4" fill="#94A3B8" />
                        <circle cx="109" cy="197" r="4" fill="#94A3B8" />
                        <circle cx="109" cy="212" r="4" fill="#94A3B8" />
                        <circle cx="126" cy="107" r="4" fill="#94A3B8" />
                        <circle cx="126" cy="122" r="4" fill="#94A3B8" />
                        <circle cx="126" cy="137" r="4" fill="#94A3B8" />
                        <circle cx="126" cy="152" r="4" fill="#94A3B8" />
                        <circle cx="126" cy="167" r="4" fill="#94A3B8" />
                        <circle cx="126" cy="182" r="4" fill="#94A3B8" />
                        <circle cx="126" cy="197" r="4" fill="#94A3B8" />
                        <circle cx="126" cy="212" r="4" fill="#94A3B8" />
                        <circle cx="143" cy="107" r="4" fill="#94A3B8" />
                        <circle cx="143" cy="122" r="4" fill="#94A3B8" />
                        <circle cx="143" cy="137" r="4" fill="#94A3B8" />
                        <circle cx="143" cy="152" r="4" fill="#94A3B8" />
                        <circle cx="143" cy="167" r="4" fill="#94A3B8" />
                        <circle cx="143" cy="182" r="4" fill="#94A3B8" />
                        <circle cx="143" cy="197" r="4" fill="#94A3B8" />
                        <circle cx="143" cy="212" r="4" fill="#94A3B8" />
                        <circle cx="160" cy="107" r="4" fill="#94A3B8" />
                        <circle cx="160" cy="122" r="4" fill="#94A3B8" />
                        <circle cx="160" cy="137" r="4" fill="#94A3B8" />
                        <circle cx="160" cy="152" r="4" fill="#94A3B8" />
                        <circle cx="160" cy="167" r="4" fill="#94A3B8" />
                        <circle cx="160" cy="182" r="4" fill="#94A3B8" />
                        <circle cx="160" cy="197" r="4" fill="#94A3B8" />
                        <circle cx="160" cy="212" r="4" fill="#94A3B8" />
                        <path
                            d="M167 83.5C167 72.5346 164.84 61.6766 160.644 51.5459C156.448 41.4152 150.297 32.2103 142.543 24.4566C134.79 16.7029 125.585 10.5523 115.454 6.35606C105.323 2.15979 94.4654 -4.79312e-07 83.5 0V83.5H167Z"
                            fill="#FF6026" />
                    </svg>
                </div>
                {/* <!-- left element  --> */}
                <div className="absolute bottom-0 left-12 max-md:left-0">
                    <svg width="76" height="113" viewBox="0 0 76 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#94A3B8" />
                        <circle cx="4" cy="19" r="4" fill="#94A3B8" />
                        <circle cx="4" cy="34" r="4" fill="#94A3B8" />
                        <circle cx="4" cy="49" r="4" fill="#94A3B8" />
                        <circle cx="4" cy="64" r="4" fill="#94A3B8" />
                        <circle cx="4" cy="79" r="4" fill="#94A3B8" />
                        <circle cx="4" cy="94" r="4" fill="#94A3B8" />
                        <circle cx="4" cy="109" r="4" fill="#94A3B8" />
                        <circle cx="21" cy="4" r="4" fill="#94A3B8" />
                        <circle cx="21" cy="19" r="4" fill="#94A3B8" />
                        <circle cx="21" cy="34" r="4" fill="#94A3B8" />
                        <circle cx="21" cy="49" r="4" fill="#94A3B8" />
                        <circle cx="21" cy="64" r="4" fill="#94A3B8" />
                        <circle cx="21" cy="79" r="4" fill="#94A3B8" />
                        <circle cx="21" cy="94" r="4" fill="#94A3B8" />
                        <circle cx="21" cy="109" r="4" fill="#94A3B8" />
                        <circle cx="38" cy="4" r="4" fill="#94A3B8" />
                        <circle cx="38" cy="19" r="4" fill="#94A3B8" />
                        <circle cx="38" cy="34" r="4" fill="#94A3B8" />
                        <circle cx="38" cy="49" r="4" fill="#94A3B8" />
                        <circle cx="38" cy="64" r="4" fill="#94A3B8" />
                        <circle cx="38" cy="79" r="4" fill="#94A3B8" />
                        <circle cx="38" cy="94" r="4" fill="#94A3B8" />
                        <circle cx="38" cy="109" r="4" fill="#94A3B8" />
                        <circle cx="55" cy="4" r="4" fill="#94A3B8" />
                        <circle cx="55" cy="19" r="4" fill="#94A3B8" />
                        <circle cx="55" cy="34" r="4" fill="#94A3B8" />
                        <circle cx="55" cy="49" r="4" fill="#94A3B8" />
                        <circle cx="55" cy="64" r="4" fill="#94A3B8" />
                        <circle cx="55" cy="79" r="4" fill="#94A3B8" />
                        <circle cx="55" cy="94" r="4" fill="#94A3B8" />
                        <circle cx="55" cy="109" r="4" fill="#94A3B8" />
                        <circle cx="72" cy="4" r="4" fill="#94A3B8" />
                        <circle cx="72" cy="19" r="4" fill="#94A3B8" />
                        <circle cx="72" cy="34" r="4" fill="#94A3B8" />
                        <circle cx="72" cy="49" r="4" fill="#94A3B8" />
                        <circle cx="72" cy="64" r="4" fill="#94A3B8" />
                        <circle cx="72" cy="79" r="4" fill="#94A3B8" />
                        <circle cx="72" cy="94" r="4" fill="#94A3B8" />
                        <circle cx="72" cy="109" r="4" fill="#94A3B8" />
                    </svg>
                </div>
                {/* <!-- main form container  --> */}
                <div
                    className="w-[70%] max-md:w-[85%]  bg-white z-0 my-10 overflow-hidden rounded-xl px-8 py-6  border-slate-300 dark:border-slate-800 border-2 dark:bg-slate-900">
                    <form action="">
                        {/* <!-- name  --> */}
                        <div className="bg-base-text-box dark:bg-slate-800 dark:text-white  py-2 rounded-lg px-4 my-4">
                            <input type="text" placeholder="Your Name"
                                className="border-none bg-transparent w-full focus:outline-0 border-transparent focus:border-transparent focus:ring-0 placeholder:text-slate-500"/>
                        </div>
                        {/* <!-- email  --> */}
                        <div className="bg-base-text-box dark:bg-slate-800 dark:text-white  py-2 rounded-lg px-4 my-4">
                            <input type="email" placeholder="Your Email"
                                className="border-none bg-transparent w-full focus:outline-0 border-transparent focus:border-transparent focus:ring-0 placeholder:text-slate-500"/>
                        </div>
                        {/* <!-- mobile number  --> */}
                        <div className="bg-base-text-box dark:bg-slate-800 dark:text-white  py-2 rounded-lg px-4 my-4">
                            <input type="number" placeholder="Your Mobile Number"
                                className="border-none bg-transparent w-full focus:outline-0 border-transparent focus:border-transparent focus:ring-0 placeholder:text-slate-500"/>
                        </div>
                        {/* <!-- your message  --> */}
                        <div className="bg-base-text-box dark:bg-slate-800 dark:text-white  py-2 rounded-lg px-4 my-4">
                            <textarea type="text" placeholder="Your Message" rows="3"
                                className="resize-none  border-none bg-transparent w-full focus:outline-0 border-transparent focus:border-transparent focus:ring-0 placeholder:text-slate-500"></textarea>
                        </div>
                        {/* <!-- submit button  --> */}
                        <button type="submit"
                            className="w-full  text-white bg-brand-500-main hover:bg-brand-600  focus:outline-none text-center inline-flex items-center justify-center font-medium rounded-lg text-sm px-4 py-4 my-4 dark:bg-brand-600 dark:hover:bg-brand-700 ">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection