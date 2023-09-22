import styles from "./primary-button.module.css"

interface PrimaryButtonProps {
  label: string
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  return <button className={styles.button}>{props.label}</button>
}