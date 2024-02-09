import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPageFound from "./pages/NoPageFound";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";
import GenrePage from "./pages/GenrePage";

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
