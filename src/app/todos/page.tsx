"use client"

import styles from "./page.module.css"
import RadioButton from "@/components/radio-button";
import { useState } from "react";


export default function Todos(){
  const [user, setUser] = useState<string>()

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
      </div>
    </div>
  )
}""