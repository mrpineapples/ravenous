import React from "react";
import "./Business.css";

const Business = props => {
  return (
    <div className="Business">
      <div className="image-container">
        <a href={props.business.url} target="_blank" rel="noopener noreferrer">
        <img src={props.business.imageSrc} alt={props.business.name}/>
        </a>
      </div>
      <a className="name-tag" href={props.business.url} target="_blank" rel="noopener noreferrer">
      <h2>{props.business.name}</h2>
      </a>
      <div className="Business-information">
        <div className="Business-address">
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{props.business.state} {props.business.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{props.business.category.toUpperCase()}</h3>
          <h3 className="rating">{props.business.rating} stars</h3>
          <p>{props.business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
