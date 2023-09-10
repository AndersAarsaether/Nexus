"use client"

import { useState } from "react";
import styles from "./page.module.css"


export default function DateNights(){

  const [dates, setDates] = useState<string[]>([]);

  const handleAddDate = () => {
    const inputElement = document.getElementById('input') as HTMLInputElement;
    const newDate = inputElement.value;
    setDates([...dates, newDate]);
    inputElement.value = '';
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.lovetext}>Date nights</h1>
        <h2 className={styles.lovetext}>Her kan man legge inn date-ideer!</h2>
      </div>
      <div>
          <ul>
            {dates.map(date => 
              <li>{date}</li>
            )}
          </ul>
      </div>
      <div>
        <form>
          <input type="text" id="input"/>
          <button type="button" onClick={handleAddDate}> Legg til </button>
        </form>
      </div>
  </div>
  );
}




