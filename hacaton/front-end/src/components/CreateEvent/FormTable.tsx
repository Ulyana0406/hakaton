import React, { useState } from 'react';
import styles from './FormTable.module.scss';

const FormTable: React.FC = () => {
  const [text, setText] = useState('');

    // Функция для обновления текста и подсчета слов
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setText(event.target.value);
    };

    // Функция подсчета слов
    const countWords = (text: string) => {
        // Удаляем лишние пробелы и разделяем текст на слова
        return text.trim().split(/\s+/).filter(Boolean).length;
    };
  return (
      <div className={styles.formtable}>
        <div className={`${styles.nameevent} ${styles.line}`}>
          <label htmlFor="nameevent">Названия мероприятия</label>
          <input type="text" id="nameevent"/>
        </div>
        <div className={`${styles.typeevent} ${styles.line}`}>
          <label htmlFor="typeevent">Тип мероприятия</label>
          <input type="text" id="typeevent"/>
        </div>
        <div className={`${styles.description} ${styles.line}`}>
          <div className={styles.title}>
            <label htmlFor="description">Описание мероприятия</label>
              <div className={styles.number}>
                {countWords(text)}/88
            </div>
          </div>
          <textarea onChange={handleChange} name="description" id="description"></textarea>
        </div>
        <button className={styles.btn}>Создать
        </button>
      </div>
    );
  };
  
  export default FormTable;