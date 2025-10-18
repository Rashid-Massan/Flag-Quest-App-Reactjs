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
function Asia(){
const asianCountries = [
  { Afghanistan: "AF" },
  { Armenia: "AM" },
  { Azerbaijan: "AZ" },
  { Bahrain: "BH" },
  { Bangladesh: "BD" },
  { Bhutan: "BT" },
  { Brunei: "BN" },
  { Cambodia: "KH" },
  { China: "CN" },
  { Cyprus: "CY" },
  { Georgia: "GE" },
  { India: "IN" },
  { Indonesia: "ID" },
  { Iran: "IR" },
  { Iraq: "IQ" },
  { Israel: "IL" },
  { Japan: "JP" },
  { Jordan: "JO" },
  { Kazakhstan: "KZ" },
  { Kuwait: "KW" },
  { Kyrgyzstan: "KG" },
  { Laos: "LA" },
  { Lebanon: "LB" },
  { Malaysia: "MY" },
  { Maldives: "MV" },
  { Mongolia: "MN" },
  { Myanmar: "MM" },
  { Nepal: "NP" },
  { NorthKorea: "KP" },
  { Oman: "OM" },
  { Pakistan: "PK" },
  { Palestine: "PS" },
  { Philippines: "PH" },
  { Qatar: "QA" },
  { SaudiArabia: "SA" },
  { Singapore: "SG" },
  { SouthKorea: "KR" },
  { SriLanka: "LK" },
  { Syria: "SY" },
  { Taiwan: "TW" },
  { Tajikistan: "TJ" },
  { Thailand: "TH" },
  { TimorLeste: "TL" },
  { Turkey: "TR" },
  { Turkmenistan: "TM" },
  { UnitedArabEmirates: "AE" },
  { Uzbekistan: "UZ" },
  { Vietnam: "VN" },
  { Yemen: "YE" }
];
let [mainSixCntrs, setMainSixCntrs]= useState([]) ;
    useEffect(()=>{
        setMainSixCntrs(
            Array.from({length: 6}, ()=>
                Object.values(asianCountries[Math.floor(Math.random()*asianCountries.length)])[0].toLowerCase()
            )
        )
    },[])
return <div>  
    <Routes>
        <Route path='/' element={<CategoriesCards countriesCardsObj={mainSixCntrs} category={'/asia'}/>}/>
        <Route path="4-Countries" element={<FourCountries allCountries={asianCountries}/>}/>
        <Route path="Quiz" element={<Quiz allCountries={asianCountries}/>}/>
        <Route path="10-seconds" element={<TimerGame allCountries={asianCountries}/>}/>
        <Route path="Flashcards" element={<Flashcards allCountries={asianCountries}/>}/>
        <Route path="Table" element={<TableCat allCountries={asianCountries}/>}/>
        <Route path="4-Flags" element={<FourFlags allCountries={asianCountries}/>}/>
    </Routes>
</div>
}

export default Asia