import React, { useEffect } from 'react'
import EventCard from '../../components/EventCard'
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';
import EventCardSkelton from '../../components/skelton/EventCardSkelton';


function AllEventSection() {

  const skeltonList = [1,2,3];
  const [eventList, dispatch] = useStateProvider();
  
  useEffect(() => {
    const api_url = process.env.REACT_APP_API_LINK;
    const getEventList = async () => {
      await axios.get(`${api_url}sheetName=events&action=getEventList`)
        .then(response => {
          // console.log('1 call');
          const eventList = response.data.data.map((items) => {
            return {
              id: items._id,
              title: items.title,
              description: items.description,
              thumbnailUrl: items.thumbnailUrl,
              date: items.date,

            }
          });
          dispatch({ type: reducerCases.SET_EVENT_LIST, eventList });
        })
        .catch(error => {
          console.log(error);
        })

    }
    getEventList();
  }, [dispatch]);


  return (
    <section
      className="h-auto  max-md:h-auto  overflow-hidden  min-h-[40rem]  pt-[5rem] max-md:pt-5">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-start max-md:items-start flex-col ">
          <h1 className="text-lg tracking-widest font-semibold text-brand-600 ms-1 uppercase">Events</h1>
          <h1 className="text-5xl max-md:text-3xl font-semibold text-slate-900 dark:text-white">All Events</h1>

        </div>
        <div id="cardContainer" className=" my-4 grid grid-cols-12 gap-8 max-md:gap-6 py-4">

          {/* <!-- ---------------- card ----------- --> */}
          {
            
            eventList.eventList.length === 0 
            ? 
            skeltonList.map((items) => (
              
              <EventCardSkelton/>
            ))
            :
            eventList.eventList.map((items) => (
                <EventCard id={items.id} title={items.title} date={items.date} description={items.description} thumbnailUrl={items.thumbnailUrl}/>
            ))
          }
          {/* <EventCard /> */}
        </div>
      </div>
    </section>
  )
}

export default AllEventSection