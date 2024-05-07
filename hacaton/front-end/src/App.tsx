import { Outlet } from "react-router-dom";
import styles from './App.module.scss'

function App() {
 

  return (
    <>
    <main className={styles.main}>
      <div className={styles.header}>
        <img src="Лого.png" alt="" />
        <div className={styles.headerhrefs}>
          <a  className={styles.hrefs } href="">Мероприятия</a>
          <a className={styles.hrefs } href="">Coworking</a>
          <a className={styles.hrefs } href="">Бронирование</a>
        </div>
        <div className={styles.headerButtons}>
           <button className={styles.enterButton}>Вход</button>
           <button className={styles.registerButton}>Регистрация</button>
        </div>
      </div>
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
           <button className={styles.allButton}>Все мероприятия</button>
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
     
    </main>
     <div className={styles.footer}>
     <img src="Логофутер.png" alt="" />
     <div className={styles.headerhrefs}>
       <a  className={styles.fhrefs } href="">Мероприятия</a>
       <a className={styles.fhrefs} href="">Coworking</a>
       <a className={styles.fhrefs } href="">Бронирование</a>
     </div>
     <div className={styles.headerButtons}>
        <button className={styles.enterButton}>Вход</button>
        <button className={styles.fregisterButton}>Регистрация</button>
     </div>
   </div>
   </>
  )
}

export default App
