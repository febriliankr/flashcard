import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import "firebase/firestore";

function CardList({ form }) {
  const [cards, setCards] = useState([]);
  const [showAnswer, setShowAnswer] = useState({});

  useEffect(() => {
    db.collection("flashcards")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        //console.log(snapshot.docs.map(doc => doc.data().content));
        setCards(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            question: doc.data().question,
            answer: doc.data().answer,
            timestamp: doc.data().timestamp,
          }))
        );
      });
  }, [form]);

  const handleClick = (id) => {
    setShowAnswer({
      ...showAnswer,
      [id]: {
        key: id,
        show: true,
      },
    });
    showAnswer[id] && console.log("showAnswer", showAnswer[id].show);
  };

  return (
    <div>
      {cards &&
        cards.map((card) => {
          const key = card.id;
          let reveal = false;
          if (showAnswer[key]) {
            reveal = showAnswer[key];
          } else {
            reveal = false;
          }

          return (
            <div className="card__container">
              <div key={card.id}>
                {card.question}{" "}
                {reveal ? (
                  <strong>{card.answer}</strong>
                ) : (
                  <button onClick={() => handleClick(card.id)}>show</button>
                )}
              </div>
            </div>
          );
        })}
      <button onClick={() => setShowAnswer({})}>Reset</button>
    </div>
  );
}

export default CardList;
