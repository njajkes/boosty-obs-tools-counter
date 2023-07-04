import { getApiRoute } from "../../shared";

interface Alert {
  id: number;
  name: string;
  price: number;
  displayName: string;
  nick: string;
  subscribed: boolean;
  onTime: number;
  level: {
    id: number;
    name: string;
    currencyPrices: {
      USD: number;
      RUB: number;
    };
  };
}

type AlertFromApi = Alert | null;

export const getAlert = async (): Promise<AlertFromApi> => {
  console.log(getApiRoute("/alert"));
  const data = await fetch(getApiRoute("/alert"))
    .then((v) => v.json())
    .catch(() => null);

  return data;
};
