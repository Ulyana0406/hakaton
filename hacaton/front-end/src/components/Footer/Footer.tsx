import styles from './Footer.module.scss'
function Footer(){
    return (
        <>
         <div className={styles.footer}>
     <img src="Логофутер.png" alt="" />
     <div className={styles.headerhrefs}>
       <a  className={styles.fhrefs } href="events">Мероприятия</a>
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
    
    
    export default Footer