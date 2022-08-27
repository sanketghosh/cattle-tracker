import { useState } from "react";
import { useCattleContext } from "../hooks/useCattleContext";

export default function CattleForm() {
  const { dispatch } = useCattleContext();
  const [title, setTitle] = useState("");
  const [totalWeight, setTotalWeight] = useState();
  const [carsLoaded, setCarsLoaded] = useState();
  const [error, setError] = useState(null);

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function weightChangeHandler(event) {
    setTotalWeight(event.target.value);
  }

  function carsLoadedChangeHandler(event) {
    setCarsLoaded(event.target.value);
  }

  async function formSubmitHandler(event) {
    event.preventDefault();
    const cattle = { title, totalWeight, carsLoaded };

    const response = await fetch("/api/cattle", {
      method: "POST",
      body: JSON.stringify(cattle),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle(" ");
      setTotalWeight(0);
      setCarsLoaded(0);
      setError(null);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_CATTLE", payload: json });
    }
  }

  return (
    <form className="create" onSubmit={formSubmitHandler}>
      <h3>Add Cattle Details</h3>
      <label>Cattle Title :</label>
      <input type="text" onChange={titleChangeHandler} value={title} />

      <label>Total Weight (Kgs):</label>
      <input type="number" onChange={weightChangeHandler} value={totalWeight} />

      <label>Cars Loaded :</label>
      <input
        type="number"
        onChange={carsLoadedChangeHandler}
        value={carsLoaded}
      />

      <button>Add Cattle</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
