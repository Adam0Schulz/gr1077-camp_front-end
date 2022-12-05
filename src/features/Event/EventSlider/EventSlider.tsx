import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import './EventSlider.css';
import {get} from "api/calls/Events";
import {Event} from "../../../api/models";
import {EventCard} from "features/Event";
import {useEffect, useState} from "react";


const Slider = () => {
// remember to add key for SplideSlide <SplideSlide key={event.id}>

    const [events, setEvents] = useState<Event[] | null>(null)

    useEffect(() => {
        async function getEvents() {
            setEvents(await get());
        }
        getEvents()
    }, []);


    return (
        <div className='wrapper'>
            <h3>Upcoming events</h3>
            <div className='background-rectangle'></div>
            <div className='timeline'></div>

            <Splide hasTrack={false} options={{
                perPage: 3.5,
                perMove: 1,
                type: "loop",
                gap: "1rem",
                rewind: true,
                arrows: true,
                drag: true,
                arrowPath: "M24.0607 13.0607C24.6464 12.4749 24.6464 11.5251 24.0607 10.9393L14.5147 1.3934C13.9289 0.807615 12.9792 0.807615 12.3934 1.3934C11.8076 1.97919 11.8076 2.92894 12.3934 3.51472L20.8787 12L12.3934 20.4853C11.8076 21.0711 11.8076 22.0208 12.3934 22.6066C12.9792 23.1924 13.9289 23.1924 14.5147 22.6066L24.0607 13.0607ZM-1.31134e-07 13.5L23 13.5L23 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z",
            }}>
                <SplideTrack>

                    {events ? events.map((event) => {
                        return(
                            <SplideSlide key={event.id}>
                                <EventCard size={'small'} event={event}/>
                            </SplideSlide>
                        );
                    }):<div></div>}
                </SplideTrack>

            </Splide>

        </div>
    )
}

export default Slider;

