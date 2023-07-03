import React from "react";
import { QueryProvider } from "./query-provider";

type ProvidersProps = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <QueryProvider>{children}</QueryProvider>;
};
