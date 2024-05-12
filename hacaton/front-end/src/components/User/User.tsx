import styles from "./User.module.scss";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <img src="user.png" alt="" />
        <div className={styles.userName}>
          <div>
            ФАМИЛИЯ <text> ИМЯ</text>
          </div>
          <div>ОТЧЕСТВО</div>
          <div className={styles.userUl}>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Университет</div>
              <div className={styles.userLi2}>ИвГПУ</div>
            </div>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Университет</div>
              <div className={styles.userLi2}>ИвГПУ</div>
            </div>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Университет</div>
              <div className={styles.userLi2}>ИвГПУ</div>
            </div>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Университет</div>
              <div className={styles.userLi2}>ИвГПУ</div>
            </div>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Университет</div>
              <div className={styles.userLi2}>ИвГПУ</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.myEvents}>
        <h1 className={styles.h2}>О МЕРОПРИЯТИИ</h1>
        <div className={styles.lineH}></div>
        <div className={styles.projects}>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Коммерческие проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButtonStart}>
              Научные проекты <img src="clickstart.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Некоммерческие проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButtonStart}>
              Стратап проекты <img src="clickstart.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.myProjects}>
        <div className={styles.projects}>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Коммерческие проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButtonStart}>
              Научные проекты <img src="clickstart.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButton}>
              Некоммерческие проекты <img src="click.png" alt="" />
            </button>
          </div>
          <div className={styles.project}>
            <button className={styles.projectButtonStart}>
              Стратап проекты <img src="clickstart.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
