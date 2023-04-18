import React, { useState } from "react";


import ContentWrapper from "../../../Components/contentWraper/ContentWraper";
import Carousel from "../../../Components/crauser/Crauser";
import SwitchTab from "../../../Components/switchTab/switchTab";
import useFetch from "../../../hook/useFetch";


 
 
 
 

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTab
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Popular;
