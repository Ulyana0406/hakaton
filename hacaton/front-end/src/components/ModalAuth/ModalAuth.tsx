import { useNavigate } from "react-router-dom";
import styles from "./ModuleAuth.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Modaly = ({
  isActive,
  setActive,
}: {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isActive, location]);

  const [user_login, setLogin] = useState("");
  const [user_password, setPassword] = useState("");
  const navigate = useNavigate();
  // const csrftoken = getCookie("csrftoken");
  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // console.log(password, login);
    const response = await fetch(
      "https://itis-projects.ivgpu.ru/api/profiles/item",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_login, user_password }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      console.log("Login successful", data);
      navigate("/userpage");
      if (isActive) {
        setActive(false);
      }
    } else {
      console.error();
      console.log("Login failed", data.message);
    }
  };
  return (
    <dialog open={isActive} className={styles.dialog}>
      <button
        className={styles.closeButton}
        onClick={() => {
          setActive(false);
        }}
      >
        <img src="cross.svg"></img>
      </button>
      <div className={styles.modal}>
        <h3 className={styles.enter}>Вход в систему</h3>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Логин</label>
          <input
            value={user_login}
            onChange={(e) => setLogin(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="login"
          ></input>
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Пароль</label>
          <input
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="••••••••••••••••••"
          ></input>
        </div>
        <div className={styles.remember}>
          <input className={styles.rememberCheck} type="checkbox" />
          <p className={styles.rememberMe}>Запомнить меня </p>
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className={styles.enterButton}
        >
          Войти
        </button>
        <div className={styles.another}>
          <div className={styles.registrdiv}>
            <h4 className={styles.anotherEnter}>Впервые в системе?</h4>
            <a className={styles.registr}> Регистрация</a>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modaly;
