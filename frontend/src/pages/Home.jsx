import { useEffect, useState } from "react";

export default function Home() {
  const [cattle, setCattle] = useState(null);

  useEffect(() => {
    const fetchCattle = async () => {
      const response = await fetch("http://localhost:5000/api/cattle");
      const json = await response.json();
    };
    fetchCattle();
  }, []);
  return (
    <div className="home">
      <h2>hey this is home xD 🚀</h2>
    </div>
  );
}
