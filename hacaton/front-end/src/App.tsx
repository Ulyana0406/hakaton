import { Outlet } from "react-router-dom";
import styles from './App.module.scss'

function App() {
 

  return (
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
          <p className={styles.eventsp}>Сюда можно поместить самое ближайшее мероприятие <br></br> Сюда можно поместить самое ближайшее мероприятие  </p>
          <div className={styles.eventsButtons}>
          <button className={styles.firstButton}>01.06.2024</button>
           <button className={styles.secondButton}>17:55</button>
           </div>
        </div>
        <div className={styles.eventUL}>
          
        </div>
        </div>
        <button className={styles.allButton}>Все мероприятия</button>
      </div>
    </main>
  )
}

export default App
