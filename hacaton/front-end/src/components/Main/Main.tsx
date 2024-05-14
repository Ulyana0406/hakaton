import styles from "./Main.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListEvent from "./ListEvent/ListEvent";
import FormattedTime from "../../api/formatdate";

interface MyComponentProps {
  id: number;
}

const MainPage: React.FC<MyComponentProps> = ({ id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const RedirectConveration = () => {
    navigate("converation");
  };
  const RedirectAboutEvent = () => {
    navigate("aboutevent");
  };
  const RedirectCreate = () => {
    navigate("createproject");
  };
  const redirectProjects = (id: number) => {
    navigate(`/projects/${id}`);
  };
  const [projects, setProjects] = useState([]);
  const [events, setEvents] = useState([]);
  const [type, setType] = useState([])
  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://itis-projects.ivgpu.ru/api/events/list"
        );
        const data = await response.json();
        setEvents(data.result);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://itis-projects.ivgpu.ru/api/projects/typelist"
        );
        const data = await response.json();
        setProjects(data.result);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchEvents();
    fetchProjects();
  }, []);
  const projectTitles = projects
    .map((project) => project.title);
  console.log(projectTitles);
  console.log(events)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://itis-projects.ivgpu.ru/api/projects/typelist"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Ошибка при получении данных");
  //       }
  //       const data = await response.json();
  //       console.log("Наши данные", data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className={styles.main}>
      <div className={styles.blok}>
        <img src="Баннер.png" alt="" />
      </div>
      <div className={styles.blok}>
        <h1 className={styles.h1}>Конференции</h1>
        <div className={styles.event_container}>
          {events.filter(events => (events.type_event.id == 2)).slice(0, 1).map(event => (
          <div className={styles.mainEvent}>
            {
              event.avatar != null ? (
                <img className={styles.eventph} src={event.avatar} alt="" />
              ):(
                <img className={styles.eventph} src="eventphoto2.png" alt="" />
              )
            }
            <h3 className={styles.name}>{event.name}</h3>
            <p className={styles.eventsp}>
              {event.short_description}
            </p>
            <div className={styles.eventsButtons}>
              <FormattedTime timeString={event.start_event} />
            </div>
          </div>
          ))}
          <div className={styles.event_list}>
          {events.filter(events => (events.type_event.id == 2)).slice(1, 5).map(event => (
            <div className={styles.event_item}>
              {
                event.avatar != null ? (
                  <img className={styles.img} src={event.avatar} alt="" />
                ):(
                  <img className={styles.img} src="eventphoto2.png" alt="" />
                )
              }
              <div className={styles.datetime}>
                <FormattedTime timeString={event.start_event} />
              </div>
              <h3 className={styles.name}>{event.name}</h3>
              <p className={styles.text}>
                {event.short_description}
              </p>
            </div>
            ))}
          </div>
        </div>
        <button onClick={RedirectConveration} className={styles.allButton}>
          Все конференции
        </button>
      </div>
      <ListEvent />

      <div className={styles.blok}>
        <h1 className={styles.h1}>ПРОЕКТЫ</h1>
        <div className={styles.projects}>
          {projectTitles.map((title, index) => (
            <div
              key={index}
              onClick={() => redirectProjects(index+1)}
              className={styles.project}
            >
              <button className={styles.projectButton}>
                {title} <img src="click.png" alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.createProjectContainer}>
        <div className={styles.Container}>
          <h1 className={styles.title}>Создай свой проект</h1>
          <text className={styles.description}>
            Вы можете создать свой проект Вы можете создать свой проект Вы
            можете создать свой проект Вы можете создать свой проект Вы можете
            создать свой проект{" "}
          </text>
          <button className={styles.btn} onClick={RedirectCreate}>
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
