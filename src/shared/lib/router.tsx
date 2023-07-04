import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "../../counter";
import { Alert } from "../../alerts";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="alerts" element={<Alert />} />
      </Routes>
    </BrowserRouter>
  );
};
