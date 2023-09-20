import styles from "./radio-button.module.css"

interface RadioButtonProps {
  options: string[];
  colors: string[];
  selected: string | undefined;
  setSelected: (option: string) => void;
}

export default function RadioButton(props: RadioButtonProps){
  return (
    <div className={styles.wrapper}>
      {props.options.map((option, index) => (
        <button
          key={option}
          className={styles.button}
          style={{ 
            backgroundColor: props.selected === option ? props.colors[index] : 'inherit',
            color: props.selected === option ? "#000" : 'azure',
          }}
          onClick={() => props.setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}