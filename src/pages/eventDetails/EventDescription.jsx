import React from 'react'

function EventDescription(props) {
    return (
        <section
            className="h-auto  max-md:h-auto overflow-hidden  max-md:max-h-none">
            <div className="max-w-screen-xl  gap-8 mx-auto  p-4 ">
                <div dangerouslySetInnerHTML={{ __html: props.description }}>

                </div>
            </div>
        </section>
    )
}

export default EventDescription