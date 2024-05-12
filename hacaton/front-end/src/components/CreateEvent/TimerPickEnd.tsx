import React, { useState } from "react";
import styles from "./TimerPick.module.scss";

const TimePicker: React.FC = () => {
  const [endTime, setEndTime] = useState({ hours: 12, minutes: 1 });

  const handleTimeChange = (
    _time: {hours: number; minutes: number; }, setTime: { (value: React.SetStateAction<{ hours: number; minutes: number; }>): void; (value: React.SetStateAction<{ hours: number; minutes: number; }>): void; (value: React.SetStateAction<{ hours: number; minutes: number; }>): void; (value: React.SetStateAction<{ hours: number; minutes: number; }>): void; (arg0: (prev: any) => any): void; }, field: string) => (event: { target: { value: string; }; }) => {
    const value = Math.max(0, Math.min(field === "hours" ? 23 : 59, parseInt(event.target.value)));
    setTime(prev => ({ ...prev, [field]: value }));
  };

  const formatTime = (time: { hours: any; minutes: any; }) => `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`;

  return (
    <div className={styles.timePickerContainer}>
      <div className={styles.header}>Выберите время</div>
      <div className={styles.timeSelection}>
        <div className={styles.timecontainer}>
          <div className={styles.title}>Окончания</div>
          <div className={styles.timeEntry}>
            <div className={styles.timeconteinerh}>
              <label htmlFor="hour">Часы</label>
              <input
                type="number"
                id="hour"
                className={styles.time}
                value={endTime.hours}
                onChange={handleTimeChange(endTime, setEndTime, "hours")}
              />
            </div>
            <div className={styles.timeconteinerm}>
              <label htmlFor="min">Минуты</label>
              <input
                type="number"
                id="min"
                className={styles.time}
                value={endTime.minutes}
                onChange={handleTimeChange(endTime, setEndTime, "minutes")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.selectedTime}>
        {formatTime(endTime)}
      </div>
    </div>
  );
};

export default TimePicker;
