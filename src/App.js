import React, { useState } from 'react'
import CardForm from './components/CardForm'
import { FaBeer } from 'react-icons/fa';
import CardList from './components/CardList';

function App() {
  const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  return (
    <div>
      <CardForm form={form} setForm={setForm}/>
      <FaBeer/>
      <p>{JSON.stringify(form)}</p>
      <CardList form={form}/>
    </div>
  )
}

export default App
