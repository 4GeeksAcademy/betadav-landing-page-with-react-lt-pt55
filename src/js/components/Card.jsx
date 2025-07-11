import React from "react";

const Card = ({ image, title, text, link }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center text-sm-start">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer text-center">
          <a href={link} className="btn btn-primary btn-sm w-100 w-sm-auto">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;