import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setConfiguration } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/search/Search";
import Explore from "./pages/explore/Explore";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound";
import Home from "./pages/home/Home";
import { settleGenres } from "./utils/genres/handleGenres";

function App() {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState(null);
  const [isGenreLoaded, setIsGenreLoaded] = useState(false);
  const callSettleGenres = async () => {
    setGenres(await settleGenres());
    setIsGenreLoaded(true);
  };
  useEffect(() => {
    callSettleGenres();
    if (genres && isGenreLoaded) {
      dispatch(setConfiguration({ genres }));
    }
  }, [isGenreLoaded]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
