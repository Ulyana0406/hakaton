import styles from 'EventItem.module.scss'

const EventItem = () => {
    return (
        <div className={styles.eventitemcontainer}>
            <img className={styles.img} src="cowork.png"></img>
            <div className={styles.name}>"SpaceHub"</div>
            <div className={styles.description}>
                Предлагает 200 комфортабельных рабочих мест. В пространстве возможна
                работа как в открытом большом зале, так и в персональных офисах для
                малых команд или индивидуальных предпринимателей.
            </div>
            <div className={styles.infowhere}>
                <div className={styles.corpus}>Корпус ИвГПУ</div>
                <div className={styles.auditories}>
                <div className={styles.text}>101/а</div>
                </div>
            </div>
        </div>
    );
}

export default EventItem;