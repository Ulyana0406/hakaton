import styles from "./Projects.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const RedirectAboutProject = () => {
    navigate("/aboutproject");
  };
  return (
    <div className={styles.projects}>
      <div className={styles.createProjectH}>
        <text className={styles.H}>КОММЕРЧЕСКИЕ</text> <br></br>
        <text className={styles.H2}>ПРОЕКТЫ</text>
      </div>
      <div className={styles.projectsInform}>
        <img src="projects.png" alt="" />
        <div className={styles.inform}>
          Описание проектов/ для чего/зачем/почему именно коммерческие Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Cras et lorem id
          elit hendrerit consectetur et non ex. Nullam semper orci vel sem
          cursus, non euismod nisi sollicitudin. Suspendisse aliquet pulvinar
          dui nec condimentum. Nullam non augue consequat, varius elit a,
          laoreet augue. Duis malesuada est arcu, sit amet bibendum neque
          tincidunt vitae. Cras luctus tincidunt ligula.Cras luctus tincidunt
          ligula.Cras luctus tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras et lorem id elit hendrerit consectetur et non
          ex. Nullam semper orci vel sem cursus, non euismod nisi sollicitudin.
          Suspendisse aliquet pulvinar dui nec condimentum. Nullam non augue
          consequat, varius elit a, laoreet augue. Duis malesuada est arcu, sit
          amet bibendum neque tincidunt vitae. Cras
        </div>
      </div>
      <div className={styles.projectsBlock}>
        <div className={styles.blok}>
          <div className={styles.blokname}>НАЗВАНИЕ</div>
          <text className={styles.bloktext}>
            Описание проекта Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras et lorem id elit hendrerit consectetur et non ex. Nullam
            semper orci vel sem cursus, non euismod Описание
          </text>
          <div className={styles.blokButtons}>
            <button className={styles.firstButton}>25.01-30.05</button>
            <button
              onClick={RedirectAboutProject}
              className={styles.secondButton}
            >
              Узнать больше
            </button>
          </div>
        </div>
        <div className={styles.blok}>
          <div className={styles.blokname}>НАЗВАНИЕ</div>
          <text className={styles.bloktext}>
            Описание проекта Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras et lorem id elit hendrerit consectetur et non ex. Nullam
            semper orci vel sem cursus, non euismod Описание
          </text>
          <div className={styles.blokButtons}>
            <button className={styles.firstButton}>25.01-30.05</button>
            <button
              onClick={RedirectAboutProject}
              className={styles.secondButton}
            >
              Узнать больше
            </button>
          </div>
        </div>
        <div className={styles.blok}>
          <div className={styles.blokname}>НАЗВАНИЕ</div>
          <text className={styles.bloktext}>
            Описание проекта Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras et lorem id elit hendrerit consectetur et non ex. Nullam
            semper orci vel sem cursus, non euismod Описание
          </text>
          <div className={styles.blokButtons}>
            <button className={styles.firstButton}>25.01-30.05</button>
            <button
              onClick={RedirectAboutProject}
              className={styles.secondButton}
            >
              Узнать больше
            </button>
          </div>
        </div>
        <div className={styles.blok}>
          <div className={styles.blokname}>НАЗВАНИЕ</div>
          <text className={styles.bloktext}>
            Описание проекта Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras et lorem id elit hendrerit consectetur et non ex. Nullam
            semper orci vel sem cursus, non euismod Описание
          </text>
          <div className={styles.blokButtons}>
            <button className={styles.firstButton}>25.01-30.05</button>
            <button
              onClick={RedirectAboutProject}
              className={styles.secondButton}
            >
              Узнать больше
            </button>
          </div>
        </div>
        <div className={styles.blok}>
          <div className={styles.blokname}>НАЗВАНИЕ</div>
          <text className={styles.bloktext}>
            Описание проекта Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras et lorem id elit hendrerit consectetur et non ex. Nullam
            semper orci vel sem cursus, non euismod Описание
          </text>
          <div className={styles.blokButtons}>
            <button className={styles.firstButton}>25.01-30.05</button>
            <button
              onClick={RedirectAboutProject}
              className={styles.secondButton}
            >
              Узнать больше
            </button>
          </div>
        </div>
        <div className={styles.blok}>
          <div className={styles.blokname}>НАЗВАНИЕ</div>
          <text className={styles.bloktext}>
            Описание проекта Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras et lorem id elit hendrerit consectetur et non ex. Nullam
            semper orci vel sem cursus, non euismod Описание
          </text>
          <div className={styles.blokButtons}>
            <button className={styles.firstButton}>25.01-30.05</button>
            <button
              onClick={RedirectAboutProject}
              className={styles.secondButton}
            >
              Узнать больше
            </button>
          </div>
        </div>
        <div className={styles.blok}>
          <div className={styles.blokname}>НАЗВАНИЕ</div>
          <text className={styles.bloktext}>
            Описание проекта Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras et lorem id elit hendrerit consectetur et non ex. Nullam
            semper orci vel sem cursus, non euismod Описание
          </text>
          <div className={styles.blokButtons}>
            <button className={styles.firstButton}>25.01-30.05</button>
            <button
              onClick={RedirectAboutProject}
              className={styles.secondButton}
            >
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
