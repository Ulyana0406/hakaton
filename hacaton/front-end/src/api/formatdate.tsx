import { parseISO , format } from 'date-fns';
import styles from './format.module.scss'
//import style from '../components/Main.module.scss'

export default function FormattedTime({ timeString }) {
    // Предположим, что ваша строка времени приходит в формате "HH:mm:ss"
    // Например, timeString может быть "14:35:06"
    const parsedDate = parseISO(timeString);

    // Форматируем дату в желаемый формат, например "HH:mm"
    const formattedTime = format(parsedDate, "HH:mm");
    const formattedDate = format(parsedDate, "dd.MM.yyyy")

    return (
    <>
      <button className={styles.firstButton}>{formattedDate}</button>
      <button className={styles.secondButton}>{formattedTime}</button>
    </>
  )
}

export function FormattedTime2({ timeString }){
    // Предположим, что ваша строка времени приходит в формате "HH:mm:ss"
    // Например, timeString может быть "14:35:06"
    const parsedDate = parseISO(timeString);

    // Форматируем дату в желаемый формат, например "HH:mm"
    const formattedTime = format(parsedDate, "HH:mm");
    const formattedDD = format(parsedDate, "dd.MM")

    return (
        <div className={styles.datetime}>
            <h3 className={styles.number}>{formattedDD}</h3>
            <div className={styles.name}>{formattedTime}</div>
        </div>
  )
}