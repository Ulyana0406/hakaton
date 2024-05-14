import { useNavigate } from 'react-router-dom';
import { FormattedTime2 } from '../../api/formatdate';
import styles from '../EventsPage/EventsPage.module.scss'
import { useEffect, useState } from 'react';

const CoworkingPage = () => {
    const navigate = useNavigate();
  const redirectAbout = () => {
    navigate("/aboutevent");
  };
  const [events, setEvent] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://itis-projects.ivgpu.ru/api/events/list"
        );
        const data = await response.json();
        setEvent(data.result);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  // const eventTitles = events.map((events) => events.result);
  // console.log(eventTitles);
  return (
    <div className={styles.eventPage}>
      <nav className={styles.breadcrumbs}>
        <a className={styles.eventA2} href="/">Главная</a>
        <img className={styles.arrow} src="arrow.svg" alt="" />
        <a className={styles.eventA} href="events">Коворкинг</a>
      </nav>

      <div className={styles.filter}></div>
      <div className={styles.eventCards}>
        {events.filter(events => (events.type_event.id == 5)).map(event => (
          <div key={event.id} className={styles.eventAp}>
          {
              event.avatar != null ? (
              <img src={event.avatar} alt="" />
              ):(
              <img src="politeh.png" alt="" />
              )
          }
          <div className={styles.eventInfo}>
          <h3 className={styles.eventInfoH}>{event.name}</h3>
          <text className={styles.eventText}>
              {event.short_description}
          </text>
          <div className={styles.eventsTimeCom}>
              <FormattedTime2 timeString={event.start_event}/>

          </div>
          <div className="btn">
          </div>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default CoworkingPage;