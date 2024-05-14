// import Header from "../Header/Header"
import styles from "../EventsPage/EventsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormattedTime2 } from "../../api/formatdate";
import ListConveration from "./ListConveration/ConverationList";
function ConverationPage() {
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
      <div className={styles.breadCrums}>
        <a className={styles.eventA} href="/">
          Главная
        </a>
        <img className={styles.arrow} src="arrow.svg" alt="" />
        <a className={styles.eventA2} href="converation">
          Конференции
        </a>
      </div>

      <div className={styles.filter}></div>
      <h1 className={styles.eventH}> Все конференции</h1>
      <div className={styles.eventCards}>
        {events.filter(events => (events.type_event.id == 2)).map(event => (
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
                <button onClick={redirectAbout} className={styles.eventB}>
                    Участвовать
                    </button>
                </div>
                </div>
            </div>
            ))}

      </div>
      <div className={styles.blok}>
        <ListConveration />
      </div>
    </div>
  );
}

export default ConverationPage;
