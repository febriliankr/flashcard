import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import "firebase/firestore";
import { BiRefresh } from "react-icons/bi";

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
    <div className="cardlist__container">
      
      <div className="refresh" onClick={() => setShowAnswer({})}><BiRefresh /></div>
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
              <div className="card__content" key={card.id}>
                {card.question}{" "}
                {reveal ? (
                  <strong>{card.answer}</strong>
                ) : (
                  <span onClick={() => handleClick(card.id)}>View</span>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CardList;
