// import Header from "../Header/Header"
import styles from "./EventsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListEvent from "../Main/ListEvent/ListEvent";
import { FormattedTime2 } from "../../api/formatdate";

function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <a className={styles.eventA} href="events">Мероприятия</a>
      </nav>

      <div className={styles.filter}></div>
      <div className={styles.eventCards}>
        {events.map(event => (
        <div key={event.id} className={styles.eventAp}>
          {
              event.avatar != null ? (
              <img src={event.avatar} alt="" />
              ):(
              <img src="politeh.png" alt="" />
              )
          }
          <div className={styles.eventInfo}>
          <div className="type">{event.type_event.name}</div>
          <h3 className={styles.eventInfoH}>{event.name}</h3>
          <text className={styles.eventText}>
              {event.short_description}
          </text>
          <div className={styles.eventsTimeCom}>
              <FormattedTime2 timeString={event.start_event}/>

          </div>
          <div className="btn">
          <button onClick={redirectAbout} className={styles.eventB}>
              Участвовать
              </button>
          </div>
          </div>
        </div>
        ))}
      </div>
      <ListEvent />
    </div>
  );
}

export default EventsPage;
