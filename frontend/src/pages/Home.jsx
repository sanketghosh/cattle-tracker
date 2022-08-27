import { useEffect } from "react";
import CattleDetails from "../components/CattleDetails";
import CattleForm from "../components/CattleForm";
import { useCattleContext } from "../hooks/useCattleContext";

export default function Home() {
  // const [cattle, setCattle] = useState(null);
  const { cattle, dispatch } = useCattleContext();

  useEffect(() => {
    const fetchCattle = async () => {
      const response = await fetch("/api/cattle");
      const json = await response.json();

      if (response.ok) {
        // setCattle(json);
        dispatch({ type: "SET_CATTLE", payload: json });
      }
    };
    fetchCattle();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="cattle">
        {cattle &&
          cattle.map((singleCattle) => (
            <CattleDetails key={singleCattle._id} cattle={singleCattle} />
          ))}
      </div>
      <CattleForm />
    </div>
  );
}
