import styles from '/styles/Expenses.module.css'

function Total(props) {
    const list = []
    props.array.map(e => {
      list.push(e.price)
    })
    var sum = list.reduce(function (a, b) {
      return Number(a) + Number(b);
    }, 0);

    if (sum > 0) {
      return (
        <div>
          <p className={styles.total}>Expenses: {list.length}</p>
          <p className={styles.total}>Total: {sum}</p>
        </div>
        
      )
    }

}

export default Total;

