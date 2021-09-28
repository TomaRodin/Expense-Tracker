import styles from '/styles/Expenses.module.css'

export default function Container(props) {
    if (props.array.length < 1) {
        return null
    }
    return (
        <div className={styles.container} >
            {props.children}
        </div>
    )
}