import { useEffect, useState } from "react";
import CattleDetails from "../components/CattleDetails";
import CattleForm from "../components/CattleForm";

export default function Home() {
  const [cattle, setCattle] = useState(null);

  useEffect(() => {
    const fetchCattle = async () => {
      const response = await fetch("/api/cattle");
      const json = await response.json();

      if (response.ok) {
        setCattle(json);
      }
    };
    fetchCattle();
  }, []);
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
