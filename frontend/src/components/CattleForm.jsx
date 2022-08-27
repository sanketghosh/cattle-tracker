import { useState } from "react";
import { useCattleContext } from "../hooks/useCattleContext";

export default function CattleForm() {
  const { dispatch } = useCattleContext();
  const [title, setTitle] = useState("");
  const [totalWeight, setTotalWeight] = useState();
  const [carsLoaded, setCarsLoaded] = useState();
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

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
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle(" ");
      setTotalWeight(" ");
      setCarsLoaded(" ");
      setError(null);
      setEmptyFields([]);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_CATTLE", payload: json });
    }
  }

  return (
    <form className="create" onSubmit={formSubmitHandler}>
      <h3>Add Cattle Details</h3>
      <label>Cattle Title :</label>
      <input
        type="text"
        onChange={titleChangeHandler}
        value={title}
        className={emptyFields.includes("title") ? "error" : " "}
      />

      <label>Total Weight (Kgs):</label>
      <input
        type="number"
        onChange={weightChangeHandler}
        value={totalWeight}
        className={emptyFields.includes("total weight") ? "error" : " "}
      />

      <label>Cars Loaded :</label>
      <input
        type="number"
        onChange={carsLoadedChangeHandler}
        value={carsLoaded}
        className={emptyFields.includes("cars loaded") ? "error" : " "}
      />

      <button>Add Cattle</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
