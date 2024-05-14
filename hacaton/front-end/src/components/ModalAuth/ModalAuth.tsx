import { useNavigate } from "react-router-dom";
import styles from "./ModuleAuth.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface University {
  id: number;
  name: string;
}

interface Speciality {
  id: number;
  name: string;
}

interface Project {
  id: number;
  title: string;
}

interface ExtraData {
  university: University;
  speciality: Speciality;
}

interface Publications{
  id: number;
  name: string;
}

interface Events{
  id: number;
  name: string;
}

interface UserData {
  id: number;
  type: number;
  firstname: string;
  secondname: string;
  therename: string;
  avatar: string;
  extra_data: ExtraData;
  projects: Project[];
  publications: Publications[];
  events: Events[];
}

interface AuthResponse{
  result?: UserData;
  message?: string;
}

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

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try{
      const responseLogin = await fetch(
        "/api/profiles/item",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            user_login: login, 
            user_password: password 
          }),
        }
      );

      const dataLogin: AuthResponse = await responseLogin.json();
      if (responseLogin.ok && dataLogin.result) {
        const responseProfile = await fetch(
          "/api/profiles/item?full_info=yes",{
            method: 'GET',
          }
        )
        const dataProfile: AuthResponse = await responseProfile.json();
        console.log("Login successful", dataProfile);
        localStorage.setItem('authData', JSON.stringify(dataProfile.result));
        navigate("/userpage");
        if (isActive) {
          setActive(false);
        }
      } else {
        console.error("Login failed", dataLogin.message);
        if (dataLogin.message) {
          console.log("Login failed", dataLogin.message);
        } else {
          console.log("Login failed: Unknown error occurred.");
        }
      }
    } catch (error) {
      console.error("Network or other error", error);
      console.log("Network or other error", error.message || "No error message available.");
    }
  };
  return (
    <dialog open={isActive} className={styles.container}>
      <div className={styles.dialog}>
      <div className={styles.modal}>
        <h3 className={styles.enter}>Вход в систему</h3>
        <button
        className={styles.closeButton}
        onClick={() => {
          setActive(false);
        }}
      />
        <div className={styles.inputDiv}>
          <label className={styles.label}>Логин</label>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="login"
          ></input>
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Пароль</label>
          <input
            value={password}
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
    </div>
    </dialog>
  );
};

export default Modaly;
