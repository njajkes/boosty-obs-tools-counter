import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const getCount = async () => {
  const data = await fetch(import.meta.env.VITE_BACKEND_URL + "counter")
    .then((v) => v.json())
    .catch(() => ({ current: 0, target: null }));
  return data as { current: number; target: number | null };
};

function App() {
  const { data } = useQuery({
    refetchInterval: 3000,
    refetchIntervalInBackground: true,
    queryFn: getCount,
    queryKey: ["sub_count"],
    initialData: { current: 0, target: null },
  });

  const to = +(
    new URLSearchParams(window.location.search).get("to") ||
    data.target ||
    1
  );

  return (
    <div className="counter-container">
      <div
        className="counter-done"
        style={{ right: 200 - (data.current / to) * 200 }}
      />
      <span className="counter">
        {data.current} / {to}
      </span>
    </div>
  );
}

export default App;
