import styles from "./Projects.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Projects_3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const RedirectAboutProject = () => {
    navigate("/aboutproject");
  };
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://itis-projects.ivgpu.ru/api/projects/list"
        );
        const data = await response.json();
        setProjects(data.result);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className={styles.projects}>
      <div className={styles.createProjectH}>
        <div className={styles.H}>Научные</div> <br></br>
        <div className={styles.H2}>Проекты </div>
      </div>
      <div className={styles.projectsInform}>
        <img src="projects.png" alt="" />
        <text className={styles.inform}>
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
        </text>
      </div>
      <div className={styles.projectsBlock}>
        {projects.filter(projects => (projects.project_type.id == 3)).map(project => (
          <div key={project.id} className={styles.blok}>
            <div className={styles.blokname}>{project.name}</div>
            <text className={styles.bloktext}>{project.description}</text>
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
        ))}
      </div>
    </div>
  );
};

export default Projects_3;
