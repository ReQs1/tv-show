import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import NoPageFound from "./pages/NoPageFound";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import AppLayout from "./components/AppLayout";
import DiscoverPage from "./pages/DiscoverPage";
import DetailsPage from "./pages/DetailsPage";
import WatchList from "./pages/WatchList";
import SearchPage from "./pages/SearchPage";
import { WatchListProvider } from "./context/watchListContext";

const queryClient = new QueryClient();

function App() {
  return (
    <WatchListProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="watchlist" element={<WatchList />} />
              <Route path="search/:query" element={<SearchPage />} />
              <Route path=":type" element={<DiscoverPage />} />
              <Route path=":type/:id" element={<DetailsPage />} />
              <Route path="genres/:genreId" element={<GenrePage />} />
              <Route path="*" element={<NoPageFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </WatchListProvider>
  );
}

export default App;
