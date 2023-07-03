import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "./counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
