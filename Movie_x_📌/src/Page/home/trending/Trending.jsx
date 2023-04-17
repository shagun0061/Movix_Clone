import React, { useState } from "react";
import ContentWrapper from "../../../Components/contentWraper/ContentWraper";
import Carousel from "../../../Components/crauser/Crauser";
import SwitchTab from "../../../Components/switchTab/switchTab";
import useFetch from "../../../hook/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  function onTabChange(tab) {
    setEndpoint(tab === "Day" ? "day" : "week");
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span    className="carouselTitle">
          Trending
        </span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
