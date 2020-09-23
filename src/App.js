import React, { useState } from 'react'
import CardForm from './components/CardForm'

import CardList from './components/CardList';

function App() {
  const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  return (
    <div className="main__container">
      <CardForm form={form} setForm={setForm}/>
      <CardList form={form}/>
    </div>
  )
}

export default App
