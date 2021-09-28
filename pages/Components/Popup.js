import styles from '/styles/Expenses.module.css'

function Popup(props) {

    function Cancel() {
        props.setPopup(false);
        props.setValue('');
    }

    return (props.trigger) ? (
        <div className={styles.popup} >
            <div className={styles.popupinner}>
                <h3>Delete</h3>
                <button onClick={props.delete}>Delete</button>
                <button onClick={Cancel}>Cancel</button>
            </div>
        </div>
    ) : "";
}

export default Popup;