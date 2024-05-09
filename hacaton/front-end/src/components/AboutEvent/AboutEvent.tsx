import styles from './AboutEvent.module.scss'
const AboutEvent = () =>{
return(
    <div className={styles.aboutEvent}>
         <div className={styles.breadCrums}>
<a className={styles.eventA} href="/">Главная</a>
<img className={styles.arrow}  src="arrow.svg" alt="" />
<a className={styles.eventA} href="events">Мероприятия</a>
<img className={styles.arrow}  src="arrow.svg" alt="" />
<a className={styles.eventA2} href="events">О мероприяти</a>

 </div>
 <h1 className={styles.h2}>О МЕРОПРИЯТИИ</h1>
       <div className={styles.lineH}></div>
     <div className={styles.about}>
<div  className={styles.aboutInfo}>
    <h1>НАЗВАНИЕ</h1>
    <text>
    Краткое описание мероприятия Краткое описание мероприятия<br></br>
    Краткое описание мероприятия Краткое описание мероприятия<br></br>
    Краткое описание мероприятия Краткое описание мероприятия<br></br>
    Краткое описание мероприятия Краткое описание мероприятия<br></br>
    </text>
</div>
     </div>
    </div>

)
}

export default AboutEvent