import styles from './Coworking.module.scss'
const Coworking: React.FC = () => {
    return(
        <div className={styles.choosecoworking}>
        <img className={styles.img} src=''></img>
        <div className={styles.description}></div>
        <div className={styles.infowhere}>
            <div className={styles.corpus}>Корпус ИвГПУ</div>
            <div className={styles.auditories}><div className={styles.text}>101/а</div></div>
        </div>
    </div>
    );
};

export default Coworking;