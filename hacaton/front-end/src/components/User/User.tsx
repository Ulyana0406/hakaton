import styles from "./User.module.scss";

const User = () => {
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

  interface Publications {
    id: number;
    name: string;
  }

  interface Events {
    id: number;
    name: string;
  }
  interface AuthData {
    result?: {
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
    };
  }
  const storedData = localStorage.getItem("authData");
  const authData: AuthData | null = storedData ? JSON.parse(storedData) : null;
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <div className={styles.blockavatar}>
          <img className={styles.userAva} src={authData.avatar} alt="" />
        </div>
        <div className={styles.userName}>
          <div className={styles.userName2}>
            {authData.firstname}{" "}
            <text className={styles.userName1}> {authData.secondname} </text>
          </div>
          <div className={styles.userName1}> {authData.therename}</div>
          <div className={styles.userUl}>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Университет</div>
              <div className={styles.userLi2}>
                {authData.extra_data.university.name}
              </div>
            </div>
            <div className={styles.userLi}>
                {authData.type === 0 ? (
                  <>
                    <div className={styles.userLi1}>Специальность</div>
                    <div className={styles.userLi2}>
                      {authData.extra_data.speciality.name}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.userLi1}>Кафедра</div>
                    <div className={styles.userLi2}>
                      {authData.extra_data.department.name}
                    </div>
                  </>
                )}
            </div>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Проекты</div>
              <div className={styles.userLi2}>15</div>
            </div>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Публикации</div>
              <div className={styles.userLi2}>23</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.myProjects}>
        <h1 className={styles.h2}>
          МОИ МЕРОПРИЯТИЯ
          <div className={styles.lineH}></div>
        </h1>
        <div className={styles.projects}>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Коммерческие проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Научные проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Некоммерческие проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Стратап проекты <img src="click.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.myProjects}>
        <h1 className={styles.h2}>
          МОИ ПРОЕКТЫ
          <div className={styles.lineH}></div>
        </h1>

        <div className={styles.projects}>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Коммерческие проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Научные проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Некоммерческие проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Стратап проекты <img src="click.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
