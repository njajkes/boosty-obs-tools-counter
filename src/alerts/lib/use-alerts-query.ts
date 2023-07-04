import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAlertsConfig } from "./get-alerts-config";
import { getAlert } from "../api";

export const useAlersQuery = () => {
  const config = getAlertsConfig();
  const [enableRefetch, setEnable] = useState(true);

  const { data } = useQuery({
    queryKey: ["alerts"],
    queryFn: getAlert,
    enabled: enableRefetch,
    refetchInterval: config.interval,
    refetchIntervalInBackground: true,
    initialData: null,
    onSuccess: (data) => {
      if (data) {
        setEnable(false);
        setTimeout(() => setEnable(true), config.animationTime);
      }
    },
  });

  return data;
};
