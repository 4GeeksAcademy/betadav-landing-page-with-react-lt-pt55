import React from "react";
import Card from "./Card";

const CardGrid = () => {
  const cards = [
    {
      image: "https://picsum.photos/300/200?random=1",
      title: "First Card",
      text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
      link: "#"
    },
    {
      image: "https://picsum.photos/300/200?random=2",
      title: "Second Card",
      text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
      link: "#"
    },
    {
      image: "https://picsum.photos/300/200?random=3",
      title: "Third Card",
      text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
      link: "#"
    },
    {
      image: "https://picsum.photos/300/200?random=4",
      title: "Fourth Card",
      text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
      link: "#"
    }
  ];

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;