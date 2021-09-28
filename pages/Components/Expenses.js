import styles from '/styles/Expenses.module.css'


export default function Expenses(props) {
    const array = props.data

    function butt(e) {
        props.setP(true)
        props.setValue(e.target.getAttribute('val'))
    }

    return (
        array.map(e => {
            return (
                <div key={e.id} onClick={butt} >
                    <div className={styles.div} val={e.id}  >
                        <h1 val={e.id} >{e.name}</h1>
                        <p val={e.id} className={styles.price}>Price: {e.price}</p>
                    </div>
                </div>


            )



        })

    )
}