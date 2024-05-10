import styles from "./CreateYourProject.module.scss";
import { useEffect } from "react";
const CreateYourProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.createProject}>
      <div className={styles.createProjectH}>
        <text className={styles.H}>СОЗДАЙ</text>{" "}
        <text className={styles.H2}>СВОЙ</text>
        <br></br>
        <text className={styles.H}>ПРОЕКТ</text>
      </div>
      <div className={styles.createProjectText}>
        У вас есть уникальная возможность создать свой проект У вас есть
        уникальная возможность создать свой проект <br></br> У вас есть
        уникальная возможность создать свой проект У вас есть уникальная
        возможность создать свой проект <br></br> У вас есть уникальная
        возможность создать свой проект У вас есть уникальная возможность
        создать свой проект <br></br>
      </div>
      <div className={styles.createProjectInfo}>
        <div className={styles.Projectform}>
          <input
            className={styles.ProjectInput}
            placeholder="Название проекта"
            type="text"
          />
          <input
            className={styles.ProjectInput}
            placeholder="Автор проекта"
            type="text"
          />
          <input
            className={styles.ProjectInput}
            placeholder="Номер телефона автора"
            type="tel"
          />
          <input
            className={styles.ProjectInput}
            placeholder="Описание проекта"
            type="text"
          />
          <input
            className={styles.ProjectInput}
            placeholder="Тип проекта"
            type="text"
          />
        </div>
        <img src="projectcreate.png" alt="" />
      </div>
      <div className={styles.Button}>
        <button className={styles.allButton}>Создать заявку</button>
      </div>
    </div>
  );
};

export default CreateYourProject;
