import { useEffect, useState, useRef } from 'react';
import styles from './ListEvent.module.scss'
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import EventItem from 'EventItem';
import {FormattedTime2} from '../../../api/formatdate';

const ListEvent = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const RedirectAboutEvent = () => {
      navigate("aboutevent");
  };
  const RedirectEvent = () =>{
    navigate("events")
  }
  const [events, setEvents] = useState([]);
  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://itis-projects.ivgpu.ru/api/events/list?sort_data"
        );
        const data = await response.json();
        setEvents(data.result);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchEvents();
  }, [])
    return(
      <div className={styles.listeventcontainer}>
          <h1 className={styles.title}>
              Ближайшие мероприятия
          </h1>
          <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
          }}
          >
            {events.map(event => (
              <SwiperSlide>
                <div className={styles.eventitemcontainer}>
                  <img className={styles.img} src="cowork.png"></img>
                  <div className={styles.container}>
                    <div className={styles.name}>{event.name}</div>
                    <div className={styles.description}>
                        {event.short_description}
                    </div>
                  </div>
                  <div className={styles.downcontainer}>
                    <FormattedTime2 timeString={event.start_event}/>
                    <button className={styles.btn}>Учавствую</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
              {/* <SwiperSlide><EventItem></EventItem></SwiperSlide> */}
              <div className={styles.bnav}>
              <button onClick={RedirectEvent} className={styles.allcoworking}>Посмотреть все</button>
              <div className={styles.nav}>
                <div ref={prevRef} className={`${styles.arrow} ${styles.navleft}`}></div>
                <div ref={nextRef} className={`${styles.arrow} ${styles.navright}`}></div>
              </div>
            </div>
          </Swiper>

      </div>
    );
}

export default ListEvent;