"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Date } from "@/model";

interface DateNights {
  storeDate: (date: Date) => void;
  deleteDate: (date: Date) => void;
}

export default function DateNights() {
  const [dates, setDates] = useState<Date[]>([]);

  const handleAddDate = () => {
    const inputElement = document.getElementById(
      "inputField"
    ) as HTMLInputElement;
    const newDate = inputElement.value;
    setDates([...dates, { name: newDate }]);
    inputElement.value = "";
  };

  const handleRemoveDate = (removedDate: Date) => {
    const filteredDates = dates.filter((date) => date !== removedDate);
    setDates(filteredDates);
  };

  return (
    <div className={styles.container}>
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
