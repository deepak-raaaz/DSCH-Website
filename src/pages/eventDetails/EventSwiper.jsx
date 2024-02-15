import React from 'react'
import CustomSwiper from '../../components/Swiper'

function EventSwiper() {
    return (
        <section
            className="h-auto  max-md:h-auto  overflow-hidden pt-[4rem] " >
            <div className="max-w-screen-xl mx-auto p-4">
                <CustomSwiper />
            </div>
        </section >
    )
}

export default EventSwiper