import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPageFound from "./pages/NoPageFound";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
