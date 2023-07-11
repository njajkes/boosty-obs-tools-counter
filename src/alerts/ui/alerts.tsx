import { useEffect, useMemo, useState } from "react";
import { useAlersQuery } from "../lib";
import { getAlertsConfig } from "../lib/get-alerts-config";

export const Alert = () => {
  const alert = useAlersQuery();
  const config = useMemo(getAlertsConfig, []);
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    if (alert) {
      setOpacity(true);
      setTimeout(() => setOpacity(false), config.animationTime - 1000);
      const audio = new Audio("/alert-sound.mp3");
      audio.play();
    }
  }, [alert, config]);

  return (
    <div
      className="flex-row items-center max-w-[600px] transition-opacity alert-container"
      style={{
        display: alert ? "flex" : "none",
        opacity: opacity ? "100" : "0",
      }}
    >
      <div className="p-[10px] shrink-0 alert-image-container">
        <img
          src="/alert-pic.jpg"
          className="w-[100px] h-[100px] rounded-md alert-image"
        />
      </div>
      <div className="font-bold text-3xl text-orange-400 [text-shadow:_1px_1px_0px_black,_-1px_-1px_0px_black,_1px_-1px_0px_black,_-1px_1px_0px_black] alert-text">
        <span className="alert-name">{alert?.displayName || ""}</span> только
        что подписался на Boosty за
        <span className="alert-price">
          {" "}
          {alert?.level?.currencyPrices?.RUB || ""}
        </span>{" "}
        RUB
      </div>
    </div>
  );
};
