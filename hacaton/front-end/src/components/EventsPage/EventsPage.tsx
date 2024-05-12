// import Header from "../Header/Header"
import styles from "./EventsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const redirectAbout = () => {
    navigate("/aboutevent");
  };
  return (
    <div className={styles.eventPage}>
      <div className={styles.breadCrums}>
        <a className={styles.eventA} href="/">
          Главная
        </a>
        <img className={styles.arrow} src="arrow.svg" alt="" />
        <a className={styles.eventA2} href="events">
          Мероприятия
        </a>
      </div>

      <div className={styles.filter}></div>
      <div className={styles.blok}>
        <h1 className={styles.h2}>
          БЛИЖАЙШИЕ <br></br> МЕРОПРИЯТИЯ
        </h1>
        <div className={styles.lineH}></div>
        <div className={styles.latestEvents}>
          <div className={styles.cowork}>
            <img className={styles.coworkImg} src="latestEvent.png" alt="" />
            <h2 className={styles.latestEventsH}>
              Название <br></br> мероприятия
            </h2>
            <p className={styles.eventsp}>
              Сюда можно поместить самое ближайшее мероприятие
              <br></br> Сюда можно поместить самое ближайшее мероприятие{" "}
            </p>
            <div className={styles.eventsTime}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventButton}>
                Участвовать
              </button>
            </div>
          </div>
          <div className={styles.cowork}>
            <img className={styles.coworkImg} src="latestEvent2.png" alt="" />
            <h2 className={styles.latestEventsH}>
              Название <br></br> мероприятия
            </h2>
            <p className={styles.eventsp}>
              Сюда можно поместить самое ближайшее мероприятие <br></br>
              Сюда можно поместить самое ближайшее мероприятие{" "}
            </p>
            <div className={styles.eventsTime}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventButton}>
                Участвовать
              </button>
            </div>
          </div>
          <div className={styles.cowork}>
            <img className={styles.coworkImg} src="latestEvent3.png" alt="" />
            <h2 className={styles.latestEventsH}>
              Название <br></br> мероприятия
            </h2>
            <p className={styles.eventsp}>
              Сюда можно поместить самое ближайшее мероприятие <br></br>
              Сюда можно поместить самое ближайшее мероприятие{" "}
            </p>
            <div className={styles.eventsTime}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventButton}>
                Участвовать
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.eventH}> ВСЕ МЕРОПРИЯТИЯ</h1>
      <div className={styles.eventCards}>
        <div className={styles.eventAp}>
          <img src="politeh.png" />
          <div className={styles.eventInfo}>
            <h3 className={styles.eventInfoH}>Название мероприятия</h3>
            <text className={styles.eventText}>
              {" "}
              краткое описание <br></br>
              краткое описание <br></br>
              краткое описание <br></br>
            </text>
            <div className={styles.eventsTimeCom}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventB}>
                Участвовать
              </button>
            </div>
          </div>
        </div>
        <div className={styles.eventAp}>
          <img src="politeh.png" />
          <div className={styles.eventInfo}>
            <h3 className={styles.eventInfoH}>Название мероприятия</h3>
            <text className={styles.eventText}>
              {" "}
              краткое описание <br></br>
              краткое описание <br></br>
              краткое описание <br></br>
            </text>
            <div className={styles.eventsTimeCom}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventB}>
                Участвовать
              </button>
            </div>
          </div>
        </div>
        <div className={styles.eventAp}>
          <img src="politeh.png" />
          <div className={styles.eventInfo}>
            <h3 className={styles.eventInfoH}>Название мероприятия</h3>
            <text className={styles.eventText}>
              {" "}
              краткое описание <br></br>
              краткое описание <br></br>
              краткое описание <br></br>
            </text>
            <div className={styles.eventsTimeCom}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventB}>
                Участвовать
              </button>
            </div>
          </div>
        </div>
        <div className={styles.eventAp}>
          <img src="politeh.png" />
          <div className={styles.eventInfo}>
            <h3 className={styles.eventInfoH}>Название мероприятия</h3>
            <text className={styles.eventText}>
              {" "}
              краткое описание <br></br>
              краткое описание <br></br>
              краткое описание <br></br>
            </text>
            <div className={styles.eventsTimeCom}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventB}>
                Участвовать
              </button>
            </div>
          </div>
        </div>
        <div className={styles.eventAp}>
          <img src="politeh.png" />
          <div className={styles.eventInfo}>
            <h3 className={styles.eventInfoH}>Название мероприятия</h3>
            <text className={styles.eventText}>
              {" "}
              краткое описание <br></br>
              краткое описание <br></br>
              краткое описание <br></br>
            </text>
            <div className={styles.eventsTimeCom}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventB}>
                Участвовать
              </button>
            </div>
          </div>
        </div>
        <div className={styles.eventAp}>
          <img src="politeh.png" />
          <div className={styles.eventInfo}>
            <h3 className={styles.eventInfoH}>Название мероприятия</h3>
            <text className={styles.eventText}>
              {" "}
              краткое описание <br></br>
              краткое описание <br></br>
              краткое описание <br></br>
            </text>
            <div className={styles.eventsTimeCom}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
                <text className={styles.eventsDateMonth}>июня</text>
              </div>
              <button onClick={redirectAbout} className={styles.eventB}>
                Участвовать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
