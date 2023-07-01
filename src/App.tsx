import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const getCount = async () => {
  const data = await fetch(import.meta.env.VITE_BACKEND_URL + "counter")
    .then((v) => v.json())
    .then((v) => v.count as number)
    .catch(() => 0);
  return data;
};

function App() {
  const { data } = useQuery({
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
    queryFn: getCount,
    queryKey: ["sub_count"],
    initialData: 0,
  });

  const to = +(new URLSearchParams(window.location.search).get("to") || 1);

  return (
    <div className="counter-container">
      <div
        className="counter-done"
        style={{ right: 200 - (data / to) * 200 }}
      />
      <span className="counter">
        {data} / {to}
      </span>
    </div>
  );
}

export default App;
