import styles from "./input-field.module.css"

interface InputFieldProps {
  onChange: (input: string) => void;
}

export default function InputField(props: InputFieldProps) {
  return <input className={styles.field} onChange={event => () => props.onChange(event.target.value)}/>
}