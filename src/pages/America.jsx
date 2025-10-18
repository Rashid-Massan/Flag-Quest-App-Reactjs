import React from "react";
import CategoriesCards from "../components/CategoriesCards";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
//games catogries:- 
import FourCountries from "../games-category/FourCountries";
import Quiz from "../games-category/Quiz";
import TimerGame from "../games-category/TimerGame";
import Flashcards from "../games-category/Flashcards";
import TableCat from "../games-category/TableCat";
import FourFlags from "../games-category/FourFlags";
function America(){
const americanCountries = [
  { AntiguaAndBarbuda: "AG" },
  { Argentina: "AR" },
  { Bahamas: "BS" },
  { Barbados: "BB" },
  { Belize: "BZ" },
  { Bolivia: "BO" },
  { Brazil: "BR" },
  { Canada: "CA" },
  { Chile: "CL" },
  { Colombia: "CO" },
  { CostaRica: "CR" },
  { Cuba: "CU" },
  { Dominica: "DM" },
  { "Dominican Republic": "DO" },
  { Ecuador: "EC" },
  { "El Salvador": "SV" },
  { Grenada: "GD" },
  { Guatemala: "GT" },
  { Guyana: "GY" },
  { Haiti: "HT" },
  { Honduras: "HN" },
  { Jamaica: "JM" },
  { Mexico: "MX" },
  { Nicaragua: "NI" },
  { Panama: "PA" },
  { Paraguay: "PY" },
  { Peru: "PE" },
  { "Saint Kitts and Nevis": "KN" },
  { "Saint Lucia": "LC" },
  { "Saint Vincent and the Grenadines": "VC" },
  { Suriname: "SR" },
  { "Trinidad and Tobago": "TT" },
  { "United States": "US" },
  { Uruguay: "UY" },
  { Venezuela: "VE" }
];
let [mainSixCntrs, setMainSixCntrs]= useState([]) ;
    useEffect(()=>{
        setMainSixCntrs(
            Array.from({length: 6}, ()=>
                Object.values(americanCountries[Math.floor(Math.random()*americanCountries.length)])[0].toLowerCase()
            )
        )
    },[])
return <div>  
    <Routes>
        <Route path='/' element={<CategoriesCards countriesCardsObj={mainSixCntrs} category={'/america'}/>}/>
        <Route path="4-Countries" element={<FourCountries allCountries={americanCountries}/>}/>
        <Route path="Quiz" element={<Quiz allCountries={americanCountries}/>}/>
        <Route path="10-seconds" element={<TimerGame allCountries={americanCountries}/>}/>
        <Route path="Flashcards" element={<Flashcards allCountries={americanCountries}/>}/>
        <Route path="Table" element={<TableCat allCountries={americanCountries}/>}/>
        <Route path="4-Flags" element={<FourFlags allCountries={americanCountries}/>}/>
    </Routes>
</div>
}

export default America;