import React, { useState } from "react";
import styles from "./Calendar.module.scss";

interface CalendarProps {
  onSelectDate: (date: Date) => void; // Типизация для функции обратного вызова
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(date); // Вызов функции обратного вызова с выбранной датой
  };

  const handleMonthChange = (step: number) => {
    const newMonth = new Date(currentYear, currentMonth + step, 1);
    setCurrentMonth(newMonth.getMonth());
    setCurrentYear(newMonth.getFullYear());
  };

  const handleYearDropdown = () => {
    setShowYearDropdown(!showYearDropdown);
  };

  const handleYearChange = (year: number) => {
    setCurrentYear(year);
    setShowYearDropdown(false);
  };

  const renderDays = () => {
    const date = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = date.getDay();

    const tiles = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      tiles.push(
        <div
          key={`empty-${i}`}
          className={`${styles.calendar_day} ${styles.empty}`}
        ></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      date.setDate(day);
      const dateCopy = new Date(date);
      tiles.push(
        <div
          key={day}
          className={`${styles.calendar_day} ${
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth
              ? styles.selected
              : ""
          }`}
          onClick={() => handleDayClick(dateCopy)}
        >
          {day}
        </div>
      );
    }

    return tiles;
  };

  return (
    <div className={styles.calendar_container}>
      <div className={styles.header}>Выбирите дату начала мероприятия</div>
      <div className={styles.datechoose}>
        <div className={styles.mdarrow}>
          <div className={styles.month_year} onClick={handleYearDropdown}>
            {months[currentMonth]} {currentYear}
          </div>
          <div className={`${styles.arrow_container}`}>
            <div
              className={`${styles.arrow} ${styles.arrowup}`}
              onClick={() => handleMonthChange(1)}
            ></div>
            <div
              className={`${styles.arrow} ${styles.arrowdown}`}
              onClick={() => handleMonthChange(-1)}
            ></div>
          </div>
          {showYearDropdown && (
            <div className={styles.year_dropdown}>
              {Array.from({ length: 10 }, (_, i) => currentYear - 5 + i).map(
                (year) => (
                  <div
                    key={year}
                    className={styles.year_item}
                    onClick={() => handleYearChange(year)}
                  >
                    {year}
                  </div>
                )
              )}
            </div>
          )}
        </div>
        <div className={styles.day_names}>
          <span>Пн</span>
          <span>Вт</span>
          <span>Ср</span>
          <span>Чт</span>
          <span>Пт</span>
          <span>Сб</span>
          <span>Вс</span>
        </div>
        <div className={styles.calendar_grid}>{renderDays()}</div>
      </div>
      <div className={styles.selected_date}>
        {selectedDate.toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </div>
    </div>
  );
};

export default Calendar;
