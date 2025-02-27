import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*USER*/}
        </Route>
        <Route>{/*ADMIN*/}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
