import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "../../counter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};
