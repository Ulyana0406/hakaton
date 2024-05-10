import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const redirectMain = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.header}>
        <img onClick={redirectMain} src="Лого.png" alt="" />
        <div className={styles.headerhrefs}>
          <a className={styles.hrefs} href="events">
            Мероприятия
          </a>
          <a className={styles.hrefs} href="">
            Coworking
          </a>
          <a className={styles.hrefs} href="">
            Бронирование
          </a>
        </div>
        <div className={styles.headerButtons}>
          <button className={styles.enterButton}>Вход</button>
          <button className={styles.registerButton}>Регистрация</button>
        </div>
      </div>
    </>
  );
}

export default Header;
