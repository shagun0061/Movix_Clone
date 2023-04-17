import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api.js";
import "./App.css";
import { getApiConfiguration, getGenres } from "./store_📅/homeSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./Page/home/Home";
import Details from "./Page/detail/Detail";
import SearchResult from "./page/searchReasult/SearchResult";
import Explore from "./page/explores/Explore";
import PageNotFound from "./page/404/PageNotFound";

function App() {
  let dispatch = useDispatch();

  let url = useSelector((store) => {
    return store.home;
  });

  const testing = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      dispatch(getApiConfiguration(res));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
     
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  useEffect(() => {
    testing();
    genresCall();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
