import React from "react";

const CardDetail = (props) => {
  console.log("card detail", props.items);

  const { title, subtitle, description } = props.items;
  return (
    <div className="card-details">
      <h1 className="details-title">{title}</h1>
      <h2 className="details-subtitle">{subtitle}</h2>
      <p className="details-description">{description}</p>
    </div>
  );
};

export default CardDetail;
