import { useQuery } from "@tanstack/react-query";
import { getCount } from "../api";
import { getCounterConfig } from "./get-counter-config";

export const useCounterQuery = () => {
  const config = getCounterConfig();

  const { data } = useQuery({
    refetchInterval: config.interval,
    refetchIntervalInBackground: true,
    queryFn: getCount,
    queryKey: ["sub_count"],
    initialData: { current: 0, target: null },
  });

  const target = +(config.target || data.target || 1);

  return {
    current: data.current,
    target: target,
  };
};
