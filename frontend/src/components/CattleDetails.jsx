import React from "react";
import { useCattleContext } from "../hooks/useCattleContext";

export default function CattleDetails({ cattle }) {
  const { dispatch } = useCattleContext();

  const deleteHandler = async () => {
    const response = await fetch("/api/cattle/" + cattle._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CATTLE", payload: json });
    }
  };

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
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
