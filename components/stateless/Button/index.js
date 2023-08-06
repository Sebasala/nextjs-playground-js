import styles from './button.module.css'

export default function Button({label, onClick}) {
    return (
        <button className={styles.button} onClick={onClick}>{label}</button>
    )
}