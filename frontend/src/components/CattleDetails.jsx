import React from "react";
import { useCattleContext } from "../hooks/useCattleContext";

//date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
      <p>
        {formatDistanceToNow(new Date(cattle.createdAt), { addSuffix: true })}
      </p>
      <button onClick={deleteHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
        </svg>
      </button>
    </div>
  );
}
