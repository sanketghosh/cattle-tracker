import React from "react";

export default function CattleDetails({ cattle }) {
  return (
    <div className="cattle-details">
      <h4>{cattle.title}</h4>
      <p>
        <strong>Total Weight (Kg) : </strong>
        {cattle.totalWeight}
      </p>
      <p>
        <strong>Cars Loaded : </strong>
        {cattle.carsLoaded}
      </p>
      <p>{cattle.createdAt}</p>
    </div>
  );
}
