import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import CarouselSlider from "./CarouselSlider"


const Home = () =>{
    return(
        <>
            <Header />
            <LandingPage />
            <CarouselSlider />
           <Footer />
            
        </>
    )
}

export  default Home;