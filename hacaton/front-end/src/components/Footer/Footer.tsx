import styles from "./Footer.module.scss";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const redirectMain = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.footer}>
        <img onClick={redirectMain} src="ПолITех.svg" alt="" />
        <div className={styles.headerhrefs}>
          <a className={styles.fhrefs} href="events">
            Мероприятия
          </a>
          <a className={styles.fhrefs} href="createevent">
            Coworking
          </a>
        </div>
        <div className={styles.headerButtons}>
          <button className={styles.enterButton}>Вход</button>
          <button className={styles.fregisterButton}>Регистрация</button>
        </div>
      </div>
    </>
  );
}

export default Footer;
