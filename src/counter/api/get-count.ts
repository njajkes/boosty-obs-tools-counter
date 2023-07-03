import { getApiRoute } from "../../shared";

interface CounterFromApi {
  current: number;
  target: number | null;
}

export const getCount = async (): Promise<CounterFromApi> => {
  const data = await fetch(getApiRoute("/counter"))
    .then((v) => v.json())
    .catch(() => ({ current: 0, target: null }));
  return data;
};
