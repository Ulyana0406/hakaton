import styles from "./User.module.scss";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <img src="user.png" alt="" />
        <div className={styles.userName}>
          <div className={styles.userName1}>
            ФАМИЛИЯ <text className={styles.userName2}> ИМЯ</text>
          </div>
          <div className={styles.userName1}>ОТЧЕСТВО</div>
          <div className={styles.userUl}>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Университет</div>
              <div className={styles.userLi2}>ИвГПУ</div>
            </div>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Институт</div>
              <div className={styles.userLi2}>ИИТЕГН</div>
            </div>
            <div className={styles.userLi}>
              <div className={styles.userLi1}>Группа</div>
              <div className={styles.userLi2}>ИСТД-31</div>
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
