import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modaly from "../ModalAuth/ModalAuth";

function Header() {
  const navigate = useNavigate();
  const redirectMain = () => {
    navigate("/");
  };
  const [isActive, setActive] = useState(false);
  const authData = JSON.parse(localStorage.getItem("authData"));
  return (
    <>
      <div className={styles.header}>
        <Modaly isActive={isActive} setActive={setActive} />
        <img onClick={redirectMain} src="ПолITех1.svg" alt="" />
        <div className={styles.headerhrefs}>
          <a className={styles.hrefs} href="events">
            Мероприятия
          </a>
          <a className={styles.hrefs} href="createevent">
            Coworking
          </a>
        </div>
        <div className={styles.headerButtons}>
          {authData ? (
            <button
              onClick={() => setActive(true)}
              className={styles.enterButton}
            >
              Вход
            </button>
          ) : (
            <></>
          )}

          <button className={styles.registerButton}>Регистрация</button>
        </div>
      </div>
    </>
  );
}

export default Header;
