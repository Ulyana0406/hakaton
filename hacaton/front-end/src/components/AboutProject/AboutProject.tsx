import styles from "./AboutProject.module.scss";
import { useEffect } from "react";
interface AuthData {
  result: {
    firstname: string;
    secondname: string;
    avatar: string;
  };
}
const AboutProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const storedData = localStorage.getItem("authData");
  const authData: AuthData | null = storedData ? JSON.parse(storedData) : null;
  return (
    <div className={styles.aboutProject}>
      <div className={styles.createProjectH}>
        <div className={styles.H}>НАЗВАНИЕ</div> <br></br>
        <div className={styles.H2}>ПРОЕКТА</div>
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.createProjectText}>
          Описание проекта Описание проекта Описание проекта Описание проекта{" "}
          <br></br>
          Описание проекта Описание проекта Описание проекта Описание проекта{" "}
          <br></br>
          Описание проекта Описание проекта Описание проекта Описание проекта{" "}
          <br></br>
          Описание проекта Описание проекта Описание проекта Описание проекта{" "}
          <br></br>
          Описание проекта Описание проекта Описание проекта Описание проекта{" "}
          <br></br>
          Описание проекта Описание проекта Описание проекта Описание проекта{" "}
          <br></br>
        </div>
        <img src="aboutproject.png" alt="" />
      </div>
      <div className={styles.participant}>
        <div className={styles.H}>УЧАСТНИКИ</div>
        <div className={styles.lineH}></div>
        <div className={styles.Projectform}>
          <input
            className={styles.ProjectInput}
            placeholder="ФИО Университет, группа (автор)"
            type="text"
          />
          <input
            className={styles.ProjectInput}
            placeholder="ФИО Университет, группа"
            type="text"
          />
          <input
            className={styles.ProjectInput}
            placeholder="ФИО Университет, группа"
            type="tel"
          />
        </div>
        <div className={styles.Button}>
          <button className={styles.allButton}>присоединиться к проекту</button>
        </div>
        <div className={styles.comments}>
          <div className={styles.H}>КОММЕНТАРИИ</div>
          <div className={styles.lineH}></div>
          <div className={styles.commentsBlok}>
            <div className={styles.comment}>
              <img src="avatar.png" alt="" />
              <div className={styles.name}>
                <text>ИМЯ</text>
                <text>ФАМИЛИЯ</text>
              </div>
              <text className={styles.textcom}>
                Хороший салон, ни разу не разочаровали. Цветы всегда свежие,
                букеты красивые. Мне нравится подход их флористов, фантазия их
                не имеет границ, могут удивить оригинальным решением. Всегда
                учтут асе пожелания. Спасибо большое
              </text>
            </div>
            <div className={styles.comment}>
              <img src="avatar.png" alt="" />
              <div className={styles.name}>
                <text>ИМЯ</text>
                <text>ФАМИЛИЯ</text>
              </div>
              <text className={styles.textcom}>
                Хороший салон, ни разу не разочаровали. Цветы всегда свежие,
                букеты красивые. Мне нравится подход их флористов, фантазия их
                не имеет границ, могут удивить оригинальным решением. Всегда
                учтут асе пожелания. Спасибо большое
              </text>
            </div>
            <div className={styles.comment}>
              <img src="avatar.png" alt="" />
              <div className={styles.name}>
                <text>ИМЯ</text>
                <text>ФАМИЛИЯ</text>
              </div>
              <text className={styles.textcom}>
                Хороший салон, ни разу не разочаровали. Цветы всегда свежие,
                букеты красивые. Мне нравится подход их флористов, фантазия их
                не имеет границ, могут удивить оригинальным решением. Всегда
                учтут асе пожелания. Спасибо большое
              </text>
            </div>
          </div>
        </div>
        {!authData ? (
          <></>
        ) : (
          <div className={styles.Button}>
            <button className={styles.allButton}>добавить отзыв</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutProject;
