import styles from "./Header.module.scss"
function Header(){
    return (
        <>
         <div className={styles.header}>
        <img src="Лого.png" alt="" />
        <div className={styles.headerhrefs}>
          <a  className={styles.hrefs } href="events">Мероприятия</a>
          <a className={styles.hrefs } href="">Coworking</a>
          <a className={styles.hrefs } href="">Бронирование</a>
        </div>
        <div className={styles.headerButtons}>
           <button className={styles.enterButton}>Вход</button>
           <button className={styles.registerButton}>Регистрация</button>
        </div>
      </div>
        </>
    )
    }
    
    
    export default Header