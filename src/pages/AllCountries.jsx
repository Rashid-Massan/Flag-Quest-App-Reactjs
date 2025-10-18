import React, { useEffect, useState } from "react";
import CategoriesCards from "../components/CategoriesCards";
import { Route, Routes } from "react-router-dom";
import FourCountries from "../games-category/FourCountries";
import countries from "../resources/resource.json"
import Quiz from "../games-category/Quiz";
import TimerGame from "../games-category/TimerGame";
import Flashcards from "../games-category/Flashcards";
import TableCat from "../games-category/TableCat";
import FourFlags from "../games-category/FourFlags";

function AllCountries(){
    let [mainSixCntrs, setMainSixCntrs]= useState([]) ;
    useEffect(()=>{
        setMainSixCntrs(
            Array.from({length: 6}, ()=>
                Object.values(countries[Math.floor(Math.random()*countries.length)])[0].toLowerCase()
            )
        )
    },[])
    return <div>

        <Routes>
            <Route path="/" element={ <CategoriesCards countriesCardsObj={mainSixCntrs} category={''}/>}/>
            <Route path="/4-countries" element={<FourCountries allCountries={countries}/>}/>
            <Route path="/Quiz" element={<Quiz allCountries={countries}/>}/>
            <Route path="10-seconds" element={<TimerGame allCountries={countries}/>}/>
            <Route path="Flashcards" element={<Flashcards allCountries={countries}/>}/>
            <Route path="Table" element={<TableCat allCountries={countries}/>}/>
            <Route path="4-Flags" element={<FourFlags allCountries={countries}/>}/>

        </Routes>
        
        
    </div>
}

export default AllCountries;