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
    console.log("e.target", form);

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
    <>
      <form className="cardform" onSubmit={handleSubmit}>
        <div>
          <label>Question: </label>
          <input
            type="text"
            name="question"
            onChange={handleChange}
            value={form.question}
            // value={form.question}
          />
        </div>
        <div>
          <label>Answer: </label>
          <input
            type="text"
            name="answer"
            onChange={handleChange}
            value={form.answer}
          />
        </div>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </>
  );
}

export default CardForm;
