import styles from './Main.module.scss'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const navigate =useNavigate();
const RedirectEvent = () =>{
  navigate("events")
}
    return (
        <div className={styles.main}>
        <div className={styles.blok}>
   <img src="Баннер.png" alt="" />
        </div>
        <div className={styles.blok}>
          <h1 className={styles.h1} >МЕРОПРИЯТИЯ</h1>
          <div className={styles.events}>
          <div className={styles.mainEvent}>
            <img className={styles.eventph} src="eventphoto.png" alt="" />
            <div className={styles.line}></div>
            <p className={styles.eventsp}>Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие 
            Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие </p>
            <div className={styles.eventsButtons}>
            <button className={styles.firstButton}>01.06.2024</button>
             <button className={styles.secondButton}>17:55</button>
             </div>
             <button onClick={RedirectEvent} className={styles.allButton}>Все мероприятия</button>
          </div>
          <div className={styles.eventUL}>
            <div className={styles.eventCard}>
              <div className={styles.eventCardImg}>
                <img src="eventphoto2.png" alt="" /></div>
              <div className={styles.eventCardDate}>
                <text>11 июня 2024</text>
                <text>17:55</text>
              </div>
              <p className={styles.eventCardDescription} >
              краткое описание краткое описание <br/>
              краткое описание краткое описание <br/>
              краткое описание краткое описание <br/>
              </p>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventCardImg}>
                <img src="eventphoto2.png" alt="" /></div>
              <div className={styles.eventCardDate}>
                <text>11 июня 2024</text>
                <text>17:55</text>
              </div>
              <p className={styles.eventCardDescription} >
              краткое описание краткое описание <br/>
              краткое описание краткое описание <br/>
              краткое описание краткое описание <br/>
              </p>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventCardImg}>
                <img src="eventphoto2.png" alt="" /></div>
              <div className={styles.eventCardDate}>
                <text>11 июня 2024</text>
                <text>17:55</text>
              </div>
              <p className={styles.eventCardDescription} >
              краткое описание краткое описание <br/>
              краткое описание краткое описание <br/>
              краткое описание краткое описание <br/>
              </p>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventCardImg}>
                <img src="eventphoto2.png" alt="" /></div>
              <div className={styles.eventCardDate}>
                <text>11 июня 2024</text>
                <text>17:55</text>
              </div>
              <p className={styles.eventCardDescription} >
              краткое описание краткое описание <br/>
              краткое описание краткое описание <br/>
              краткое описание краткое описание <br/>
              </p>
            </div>
            
          </div>
          </div>
          
        </div>
        <div className={styles.blok}>
        <h1 className={styles.h2}>БЛИЖАЙШИЕ <br></br> МЕРОПРИЯТИЯ</h1>
       <div className={styles.lineH}></div>
       <div className={styles.latestEvents}>
       <div className={styles.cowork}>
   <img className={styles.coworkImg} src="latestEvent.png" alt="" />
   <h2 className={styles.latestEventsH}>Название <br></br> мероприятия</h2>
            <p className={styles.eventsp}>Сюда можно поместить самое ближайшее мероприятие 
   <br></br> Сюда можно поместить самое ближайшее мероприятие </p>
            <div className={styles.eventsTime}>
              <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
              <text className={styles.eventsDateMonth}>июня</text>
              </div>
            <button className={styles.eventButton}>Участвовать</button>
           
             </div>
          
          </div>
          <div className={styles.cowork}>
   <img className={styles.coworkImg} src="latestEvent.png" alt="" />
            <h2 className={styles.latestEventsH} >Название <br></br> мероприятия</h2>
            <p className={styles.eventsp}>Сюда можно поместить самое ближайшее мероприятие <br></br>  
             Сюда можно поместить самое ближайшее мероприятие </p>
            <div className={styles.eventsTime}>
            <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
              <text className={styles.eventsDateMonth}>июня</text>
              </div>
            <button className={styles.eventButton}>Участвовать</button>
            
             </div>
          
          </div>
          <div className={styles.cowork}>
   <img className={styles.coworkImg} src="latestEvent.png" alt="" />
   <h2 className={styles.latestEventsH}>Название <br></br> мероприятия</h2>
            <p className={styles.eventsp}>Сюда можно поместить самое ближайшее мероприятие <br></br> 
            Сюда можно поместить самое ближайшее мероприятие </p>
            <div className={styles.eventsTime}>
            <div className={styles.eventsDate}>
                <div className={styles.eventsDateNumber}>01</div>
              <text className={styles.eventsDateMonth}>июня</text>
              </div>
            <button className={styles.eventButton}>Участвовать</button>
             
             </div>
          
          </div>
       </div>
        </div>
        <div className={styles.blok}>
        <h1 className={styles.h1}>COWORKING</h1>
   <div className={styles.coworks}>
   <div className={styles.cowork}>
   <img className={styles.coworkImg} src="cowork.png" alt="" />
            
            <p className={styles.eventsp}>Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие 
            Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие </p>
            <div className={styles.eventsButtons}>
            <button className={styles.firstButton}>01.06.2024</button>
             <button className={styles.secondButton}>17:55</button>
             </div>
          
          </div>
          <div className={styles.cowork}>
          <img className={styles.coworkImg} src="cowork.png" alt="" />
            
            <p className={styles.eventsp}>Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие 
            Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие </p>
            <div className={styles.eventsButtons}>
            <button className={styles.firstButton}>01.06.2024</button>
             <button className={styles.secondButton}>17:55</button>
             </div>
             
          </div>
          <div className={styles.cowork}>
            <img className={styles.coworkImg} src="cowork.png" alt="" />
           
            <p className={styles.eventsp}>Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие 
            Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие </p>
            <div className={styles.eventsButtons}>
            <button className={styles.firstButton}>01.06.2024</button>
             <button className={styles.secondButton}>17:55</button>
             </div>
             
          </div>
         
   </div>
   <div className={styles.blockButtons }>
   <button className={styles.allButton}>Посмотреть всё</button>
   </div>
   <div className={styles.blok}>
   <h1 className={styles.h1}>ПРОЕКТЫ</h1>
   
   <div className={styles.projects}>
   <div className={styles.project}>
  
          <button className={styles.projectButton} >Коммерческие проекты <img src="click.png" alt="" /></button>
          </div>
          <div className={styles.project}>
  
  <button className={styles.projectButtonStart} >Научные проекты <img src="clickstart.png" alt="" /></button>
  </div>
          <div className={styles.project}>
  
  <button className={styles.projectButton} >Некоммерческие проекты  <img src="click.png" alt="" /></button>
  </div>
  <div className={styles.project}>
  
  <button className={styles.projectButtonStart} >Стратап проекты <img src="clickstart.png" alt="" /></button>
  </div>
  
   </div>
   </div>
   <div className={styles.blok}>
   <div className={styles.createProject}>
    <img className={styles.createback} src="create.jpg" alt="" />
    <h1 className={styles.createH}>СОЗДАЙ СВОЙ ПРОЕКТ</h1>
    <text className={styles.createText}>Вы можете создать свой проект Вы можете создать свой проект<br></br>
    Вы можете создать свой проект Вы можете создать свой проект<br></br>
    Вы можете создать свой проект Вы можете создать свой проект<br></br>
    Вы можете создать свой проект Вы можете создать свой проект<br></br>
      </text>
      <button className={styles.createButton}>Создать</button>
   </div>
   </div>
        </div>
       
      </div>
    )
    }
    
    export default MainPage