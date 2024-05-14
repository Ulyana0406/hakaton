import { useState } from "react";
import styles from "./Footer.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Modaly from "../ModalAuth/ModalAuth";
function Footer() {
  const navigate = useNavigate();
  const redirectMain = () => {
    navigate("/");
  };
  const logout = () => {
    localStorage.removeItem("authData");
    navigate("/");
  };
  const [isActive, setActive] = useState(false);
  const storedData = localStorage.getItem("authData");
  const authData: null = storedData ? JSON.parse(storedData) : null;
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
      <Modaly isActive={isActive} setActive={setActive} />
        <img onClick={redirectMain} src="ПолITех.svg" alt="" className={styles.logo}/>
        <div className={styles.headerHrefs}>
          <Link to="/events" className={styles.hrefs}>
            Мероприятия
          </Link>
          <Link to="/coworking" className={styles.hrefs}>
            Coworking
          </Link>
          <Link to="/createevent" className={styles.hrefs}>
            Бронирование
          </Link>
          <Link to="/events" className={styles.hrefs}>
            Проекты
          </Link>
          <Link to="/converation" className={styles.hrefs}>
            Конференции
          </Link>
        </div>
        <div className={styles.headerButtons}>
          {!authData ? (
            <div className={styles.btn}>
            <button
              onClick={() => setActive(true)}
              className={styles.exit}
            >
              Вход
            </button>
            <button
            onClick={() => setActive(true)}
            className={styles.exit}
          >
            Регистрация
          </button>
          </div>
          ) : (
            <div onClick={logout} className={`${styles.exit}`}>
              Выход
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
