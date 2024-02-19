import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import NoPageFound from "./pages/NoPageFound";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import AppLayout from "./components/AppLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="genres/:genreId" element={<GenrePage />} />
            <Route path="*" element={<NoPageFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
