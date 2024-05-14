import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Modaly from "../ModalAuth/ModalAuth";

interface AuthData {
  result: {
    firstname: string;
    secondname: string;
    avatar: string;
  };
}

function Header()  {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const storedData = localStorage.getItem("authData");
  const authData: AuthData | null = storedData ? JSON.parse(storedData) : null;
  const logout = () => {
    localStorage.removeItem("authData");
    navigate("/");
  };

  const redirectUserPage = () => {
    navigate("/userpage");
  };
  return (
    <>
      <Modaly isActive={isActive} setActive={setActive} />
      <div className={styles.header}>
        <img onClick={() => navigate("/")} src="ПолITех1.svg" alt="Home" />
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
        {!authData ? (
        <div className={styles.headerButtons}>
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
          <div className={styles.headerButtons}>
            <div onClick={redirectUserPage} className={styles.infouser}>
              <img
                className={styles.img}
                src={authData.avatar}
                alt={`${authData.firstname} ${authData.secondname}`}
              />
              <div
                className={styles.name}
              >{`${authData.firstname} ${authData.secondname}`}</div>
              {/* <div
                className={styles.firsname}
              >{`${authData.firstname} ${authData.secondname}`}</div> */}
              {/* <div onClick={() =>{
                localStorage.removeItem("authData");
                navigate("/");
              }} className={styles.exit}>
                Выход
              </div> */}
            </div>
          </div>
          )}
      </div>
    </>
  );
}

export default Header;
