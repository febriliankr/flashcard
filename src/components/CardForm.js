import React from "react";
import { db } from "../config/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

function CardForm({ form, setForm }) {
  const handleChange = (e) => {
    if (e.target.name === "question") {
      setForm({
        ...form,
        question: e.target.value,
      });
    } else if (e.target.name === "answer") {
      setForm({
        ...form,
        answer: e.target.value,
      });
    }
    console.log("form", form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.question){return}
    if(!form.answer){return}

    db.collection("flashcards").add({
      question: form.question,
      answer: form.answer,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setForm({
      question: "",
      answer: "",
    });
  };

  return (
    <div className="cardform__container">

    <section>
    <h1>Flashcard App <span role="img" aria-label="flash">⚡</span></h1>
    <p>Stack it up to rise your grades up!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
          placeholder="Question..."
            type="text"
            name="question"
            onChange={handleChange}
            value={form.question}
            // value={form.question}
          />
        </div>
        <div>
          <input
            type="text"
            name="answer"
            onChange={handleChange}
            value={form.answer}
            placeholder="Answer..."
          />
        </div>
        <button onClick={handleSubmit}><span role="img" aria-label="sheep">🐑</span>Add</button>
      </form>
      
      </section>
      
      <div className="copyright">Copyright © 2020 <a href="http://febrilian.com">Febrilian</a></div>
    </div>
  );
}


export default CardForm;
