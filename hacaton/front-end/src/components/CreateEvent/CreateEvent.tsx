import React, { useState, useRef, useEffect   } from 'react';
import Calendar from "./Calendar";
import styles from "./CreateEvent.module.scss";
import TimePicker from './TimerPick';
import TimePickerEnd from './TimerPickEnd';
import ChooseCoworking from './ChooseCoworking'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FormTable from "./FormTable";
import CalendarEnd from './CalendarEnd';
import Coworking from './Coworking';

interface ICreateEventProps {}

const CreateEvent: React.FC<ICreateEventProps> = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDateEnd, setSelectedDateEnd] = useState<Date | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumbs}>
        <a className={styles.eventA2} href="/">Главная</a>
        <img className={styles.arrow} src="arrow.svg" alt="" />
        <a className={styles.eventA2} href="events">Мероприятия</a>
        <img className={styles.arrow} src="arrow.svg" alt="" />
        <a className={styles.eventA} href="createevent">Создать мероприятие</a>
      </nav>
      <h1 className={styles.title}>Создание мероприятия</h1>
      <div className={styles.title_line}></div>
      <div className={styles.appcontainer}>
        <div className={styles.datecontainer}>
          <Calendar onSelectDate={setSelectedDate} />
          <TimePicker />
        </div>
        <div className={styles.datecontainer}>
          <CalendarEnd onSelectDateEnd={setSelectedDateEnd} />
          <TimePickerEnd />
        </div>
        <div className={styles.datecontainer}>
          <div className={`${styles.img}`}></div>
        </div>
      </div>
      <h1 className={styles.title}>Доступные аудитории</h1>
      <div className={styles.title_line}></div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {selectedDate & selectedDateEnd ?(
          <>
          <SwiperSlide><Coworking/></SwiperSlide>
          <SwiperSlide><Coworking/></SwiperSlide>
          <SwiperSlide><Coworking/></SwiperSlide>
          <SwiperSlide><Coworking/></SwiperSlide>
          </>
        ):(
          <>
          <SwiperSlide><ChooseCoworking /></SwiperSlide>
          <SwiperSlide><ChooseCoworking /></SwiperSlide>
          <SwiperSlide><ChooseCoworking /></SwiperSlide>
          <SwiperSlide><ChooseCoworking /></SwiperSlide>
          </>
        )}
      <div className={styles.bnav}>
        <button className={styles.allcoworking}>Посмотреть все</button>
        <div className={styles.nav}>
          <div ref={prevRef} className={`${styles.arrow} ${styles.navleft}`}></div>
          <div ref={nextRef} className={`${styles.arrow} ${styles.navright}`}></div>
        </div>
      </div>
      </Swiper>
        <h1 className={styles.title}>О мероприятии</h1>
        <div className={styles.title_line}></div>
      <FormTable />
    </div>
  );
}

export default CreateEvent;
