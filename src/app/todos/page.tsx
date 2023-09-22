"use client"

import { useState } from "react";
import InputField from "@/components/input-field";
import styles from "./page.module.css"
import RadioButton from "@/components/radio-button";
import PrimaryButton from "@/components/primary-button";


export default function Todos(){
  const [user, setUser] = useState<string>("Begge")

  return (
    <div className="container">
      <h1 className="title">Oppgaver</h1>
      <div className={styles.contentWrapper}>
        <RadioButton 
          selected={user}
          setSelected={setUser}
          options={["Anders", "Begge", "Vilde"]}
          colors={["#44EB9F", "#FDFF8A", "#E287CE"]}
        />
        <div className={styles.inputWrapper}>
          <InputField

          />
          <PrimaryButton 
            label="Legg til"
          />
        </div>
      </div>
    </div>
  )
}""