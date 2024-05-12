import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modaly from "../ModalAuth/ModalAuth";
import Cookies from "js-cookie";

function Header() {
  const navigate = useNavigate();
  const redirectMain = () => {
    navigate("/");
  };
  const [isActive, setActive] = useState(false);
  const authToken: string | undefined = Cookies.get('sessionid')
  
  return (
    <div className={styles.header}>
      <Modaly isActive={isActive} setActive={setActive} />
      <img onClick={redirectMain} src="Лого.png" alt="Лого" />
      {authToken ? (
        <div className={styles.headerhrefs}>
          <a className={styles.hrefs} href="events">Мероприятия</a>
          <a className={styles.hrefs} href="coworking">Coworking</a>
          <a className={styles.hrefs} href="booking">Бронирование</a>
        </div>
      ) : (
        <div className={styles.headerButtons}>
          <button className={styles.enterButton} >Вход</button>
          <button className={styles.registerButton}>Регистрация</button>
        </div>
      )}
    </div>
  );
}

export default Header;