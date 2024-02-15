import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';
import EventSwiper from './EventSwiper';
import EventFAQ from './EventFAQ';
import EventDescription from './EventDescription';
import EventDetailsSection from './EventDetailsSection';
import EventDetailsSkelton from '../../components/skelton/eventDetails/EventDetailsSkelton';


function EventDetails() {


    const [eventDetails, dispatch] = useStateProvider();

    const { id } = useParams();
    useEffect(() => {
        const api_url = process.env.REACT_APP_API_LINK;
        const getEventDetails = async () => {
            await axios.get(`${api_url}sheetName=events&action=getEventByID&id=${id}`)
                .then(response => {
                    // console.log('2 call');
                    //   console.log(response.data.data);
                    const eventDetails = response.data.data;

                    dispatch({ type: reducerCases.SET_EVENT_DETAILS, eventDetails });
                })
                .catch(error => {
                    console.log(error);
                })

        }
        getEventDetails();
    }, [dispatch, id]);
    // console.log(eventDetails);

    return (
        <>
        {
            eventDetails.eventDetails._id !== 'invalid_id' ? " " : ""

        }
            {
                eventDetails.eventDetails._id === id 
                    ?
                    <>
                        <EventSwiper />
                        <EventDetailsSection
                            title={eventDetails.eventDetails.title}
                            description={eventDetails.eventDetails.description}
                            date={eventDetails.eventDetails.date}
                            time={eventDetails.eventDetails.time}
                            venue={eventDetails.eventDetails.venue}
                            fee={eventDetails.eventDetails.fee}
                        />
                        <EventDescription
                            description={eventDetails.eventDetails.description}
                        />
                        <EventFAQ />
                    </>
                    :
                    <EventDetailsSkelton/>
            }




        </>
    )
}

export default EventDetails
