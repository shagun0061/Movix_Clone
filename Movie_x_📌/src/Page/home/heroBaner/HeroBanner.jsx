import React,{useState,useEffect} from "react";
import {useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hook/useFetch";

const HeroBanner = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState("");
  console.log(background);
  const [query, setQuery] = useState("")
  const {data, loading, error } = useFetch("/movie/upcoming");
  
  const searchQueryHandeler=(event)=>{
    if(event.key=="Enter" && query.length>0){
      navigate(`/search/${query}`);
    }
  }
 
  useEffect(()=>{
    let bg = data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(`https://image.tmdb.org/t/p/original${bg}`);
    
  },[data])
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">
            <span className="subTitle">
              Millons of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                onKeyUp={searchQueryHandeler}
                onChange={(e)=>{setQuery(e.target.value)}}
                placeholder="Search for a movie or tv show..."
              />
              <button>Search</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
