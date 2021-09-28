import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Expenses.module.css'
import Expenses from './components/Expenses'
import { useState, useRef } from 'react'
import Popup from './components/Popup'
import Container from './components/Container'
import Total from './components/Total'

export default function Home() {

  const [array, setArray] = useState([]);
  const name = useRef();
  const price = useRef();

  const [buttonPopup, setPopup] = useState(false);
  const [value, setValue] = useState(null);
  const [ex, setEx] = useState(<Expenses data={array} setP={setPopup}  ></Expenses>)

  function Add() {
    if (name.current.value === "" || price.current.value === "") {
      return null;
    }
    else {
      const i = array.length - 1
      array.push(
        {
          "name": name.current.value,
          "price": price.current.value,
          "id": i + 1
        }
      )

      setArray(array)
      setEx(<Expenses data={array} setP={setPopup} setValue={setValue} ></Expenses>)
      name.current.value = ""
      price.current.value = ""
    }


  }

  function Del() {

    const newarray = array.filter(e => e.id !== Number(value))

    setArray(newarray)
    setPopup(false)
    setValue(null)
    setEx(<Expenses data={newarray} setP={setPopup} setValue={setValue} ></Expenses>)

  }

  function KeyHandler(e) {
    if (e.key === 'Enter') {
      Add();
    }
  }


  return (
    <div>
      <h1>Expense Tracker</h1>
      <input placeholder="Name:" className={styles.input} ref={name} onKeyPress={KeyHandler} required ></input>
      <input placeholder="Price:" className={styles.input} ref={price} type="number" min="0" onKeyPress={KeyHandler} required ></input>
      <button onClick={Add} className={styles.button}  >Add</button>
      <Container array={array} >
        {ex}
        <Total array={array} />
      </Container>

      <Popup trigger={buttonPopup} setPopup={setPopup} value={value} setValue={setValue} delete={Del} ></Popup>


    </div>
  )
}
