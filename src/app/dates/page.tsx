"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { DateNight } from "@/model";

const storeDate = (dateNight: DateNight) => {
  console.log(dateNight, "stored");
}

const deleteDate = (dateNight: DateNight) => {
  console.log(dateNight, "deleted");
}

export default function DateNights() {
  const [dates, setDates] = useState<DateNight[]>([]);

  const handleAddDate = () => {
    const inputElement = document.getElementById("inputField") as HTMLInputElement;
    const newDateName = inputElement.value;
    const newDate = { name: newDateName } as DateNight
    inputElement.value = "";
    
    setDates([...dates, newDate]);
    storeDate(newDate)
  };

  const handleRemoveDate = (removedDateNight: DateNight) => {
    const filteredDates = dates.filter((date) => date !== removedDateNight);

    setDates(filteredDates);
    deleteDate(removedDateNight);
  };

  return (
    <div className="container">
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Date nights</h1>
        <h2 className={styles.header}>Her kan man legge inn date-ideer!</h2>
      </div>
      <div className={styles.dateListWrapper}>
        {dates.map((dateName) => (
          <div className={styles.row} key={dateName.name}>
            <span className={styles.dateName}>{dateName.name}</span>
            <button
              className={styles.removeButton}
              type="button"
              onClick={() => handleRemoveDate(dateName)}
            >
              Fjern date
            </button>
          </div>
        ))}
      </div>
      <div className={styles.inputWrapper}>
        <input className={styles.inputField} type="text" id="inputField" />
        <button
          className={styles.addButton}
          type="button"
          onClick={() => handleAddDate()}
        >
          Legg til
        </button>
      </div>
    </div>
  );
}
