import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

type QueryProviderProps = {
  children?: React.ReactNode;
};

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
