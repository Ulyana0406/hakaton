import styles from './AboutEvent.module.scss'
import { useEffect } from 'react';
const AboutEvent = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
return(
    <div className={styles.aboutEvent}>
         <div className={styles.breadCrums}>
<a className={styles.eventA} href="/">Главная</a>
<img className={styles.arrow}  src="arrow.svg" alt="" />
<a className={styles.eventA} href="events">Мероприятия</a>
<img className={styles.arrow}  src="arrow.svg" alt="" />
<a className={styles.eventA2} href="aboutevent">О мероприяти</a>

 </div>
 <h1 className={styles.h2}>О МЕРОПРИЯТИИ</h1>
       <div className={styles.lineH}></div>
     <div className={styles.about}>
<div  className={styles.aboutInfo}>
    <h1 className={styles.aboutН}>НАЗВАНИЕ</h1>
    <text className={styles.aboutText}>
    Краткое описание мероприятия Краткое описание мероприятия<br></br>
    Краткое описание мероприятия Краткое описание мероприятия<br></br>
    Краткое описание мероприятия Краткое описание мероприятия<br></br>
    Краткое описание мероприятия Краткое описание мероприятия<br></br>
    </text>
    <button className={styles.allButton}>ЗАПИСАТЬСЯ</button>
</div>
<div className={styles.aboutImges}>
<img className={styles.aboutImge} src="group.png" alt="" />

</div>
     </div>
     <div className={styles.whatAwait}>
     <h1 className={styles.h2}>ЧТО ВАС ЖДЕТ</h1>
     <div className={styles.lineH}></div>
     <div className={styles.ul}>
     <div className={styles.li}>
<img src="li.svg" alt="" />
<text className={styles.liText} >«Вызовы города»: команды стажёров вместе с капитанами-разработчиками будут решать <br></br> задачи от бизнес-групп Екома и Райдтех в игровой форме.</text>
     </div>
     <div className={styles.li}>
<img src="li.svg" alt="" />
<text className={styles.liText} >«Вызовы города»: команды стажёров вместе с капитанами-разработчиками будут решать <br></br> задачи от бизнес-групп Екома и Райдтех в игровой форме.</text>
     </div>
     <div className={styles.li}>
<img src="li.svg" alt="" />
<text className={styles.liText}>«Вызовы города»: команды стажёров вместе с капитанами-разработчиками будут решать <br></br> задачи от бизнес-групп Екома и Райдтех в игровой форме.</text>
     </div>
     <div className={styles.li}>
<img src="li.svg" alt="" />
<text className={styles.liText}>«Вызовы города»: команды стажёров вместе с капитанами-разработчиками будут решать <br></br> задачи от бизнес-групп Екома и Райдтех в игровой форме.</text>
     </div>
     </div>
     </div>
     <div className={styles.place}>
     <h1 className={styles.h2}>МЕСТО ПРОВЕДЕНИЯ</h1>
     <div className={styles.lineH}></div>
     <div className={styles.placeInfo}>
       
            <div className={styles.date}>
<div className={styles.number}>1</div>
<div className={styles.month}>июня</div>
        </div>
        <div className={styles.date}>
<div className={styles.month}>Аудитория</div>
<div className={styles.number}>118</div>
        </div>
        <div className={styles.time}>
<div className={styles.number}>18:00</div>
        </div>
     </div>
     </div>
     <div className={styles.place}>
     <h1 className={styles.h2}>ОРГАНИЗАТОР</h1>
     <div className={styles.lineH}></div>
     <div className={styles.org}>
<img className={styles.orgimg} src="org.png" alt="" />
<div className={styles.orgInfo}>
<text className={styles.orgInfoName}>Фамилия <br></br> Имя</text>
<text className={styles.orgInfo} > Должность, стаж, степень, звание <br /></text>
<text className={styles.orgInfo}> Еще другая информация еще другая информация <br></br>
Еще другая информация еще другая информация <br></br>
Еще другая информация еще другая информация <br></br>
Еще другая информация еще другая информация <br></br></text>
</div>
     </div>
     </div>
    </div>

)
}

export default AboutEvent