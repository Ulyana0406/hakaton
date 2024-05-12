import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Cookies from 'js-cookie';
=======
import { useState } from "react";
import Modaly from "../ModalAuth/ModalAuth";

>>>>>>> main
function Header() {
  const authToken: string | undefined = Cookies.get('sessionid');
  const navigate = useNavigate();
  const redirectMain = () => {
    navigate("/");
  };
  const [isActive, setActive] = useState(false);
  
  return (
<<<<<<< HEAD
    <div className={styles.header}>
      <img onClick={redirectMain} src="Лого.png" alt="Лого" />
      {authToken ? (
        <div className={styles.headerhrefs}>
          <a className={styles.hrefs} href="events">Мероприятия</a>
          <a className={styles.hrefs} href="coworking">Coworking</a>
          <a className={styles.hrefs} href="booking">Бронирование</a>
          <div className={styles.headerButtons}>
              <button className={styles.enterButton}>Вход</button>
              <button className={styles.registerButton}>Регистрация</button>
            </div>
=======
    <>
      <div className={styles.header}>
        <Modaly isActive={isActive} setActive={setActive} />
        <img onClick={redirectMain} src="Лого.png" alt="" />
        <div className={styles.headerhrefs}>
          <a className={styles.hrefs} href="events">
            Мероприятия
          </a>
          <a className={styles.hrefs} href="createevent">
            Coworking
          </a>
>>>>>>> main
        </div>
      ) : (
        <div className={styles.headerButtons}>
<<<<<<< HEAD
          <button className={styles.enterButton} >Вход</button>
=======
          <button
            onClick={() => setActive(true)}
            className={styles.enterButton}
          >
            Вход
          </button>
>>>>>>> main
          <button className={styles.registerButton}>Регистрация</button>
        </div>
      )}
    </div>
  );
}

export default Header;
