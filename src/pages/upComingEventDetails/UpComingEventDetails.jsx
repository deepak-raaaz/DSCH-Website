import React, { useEffect } from 'react'
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/constants';
import axios from 'axios';
import UpcomingEventHeroSection from './UpcomingEventHeroSection';
import EventDescription from '../eventDetails/EventDescription'
import EventFAQ from '../eventDetails/EventFAQ';

function UpComingEventDetails() {

  const [upComingEvent, dispatch] = useStateProvider();

  useEffect(() => {
    const api_url = process.env.REACT_APP_API_LINK;
    const getUpcomingEvent = async () => {
      await axios.get(`${api_url}sheetName=upcoming-event&action=getUpcomingEvent`)
        .then(response => {
          // console.log('upcoming call');
          //   console.log(response);
          const upComingEvent = response.data.data;

          dispatch({ type: reducerCases.SET_UPCOMING_EVENT, upComingEvent });
        })
        .catch(error => {
          console.log(error);
        })

    }
    getUpcomingEvent();
  }, [dispatch]);
  // console.log(Object.entries(upComingEvent.upComingEvent).length === 0);

  return (
    <>
      <UpcomingEventHeroSection data={upComingEvent} />
      <EventDescription
        description={upComingEvent.upComingEvent.description}
      />
      <EventFAQ />
    </>
  )
}

export default UpComingEventDetails