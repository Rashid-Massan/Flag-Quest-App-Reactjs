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
function Europe(){
const europeCountries = [
  { Albania: "AL" },
  { Andorra: "AD" },
  { Armenia: "AM" },
  { Austria: "AT" },
  { Azerbaijan: "AZ" },
  { Belarus: "BY" },
  { Belgium: "BE" },
  { "Bosnia and Herzegovina": "BA" },
  { Bulgaria: "BG" },
  { Croatia: "HR" },
  { Cyprus: "CY" },
  { "Czech Republic": "CZ" },
  { Denmark: "DK" },
  { Estonia: "EE" },
  { Finland: "FI" },
  { France: "FR" },
  { Georgia: "GE" },
  { Germany: "DE" },
  { Greece: "GR" },
  { Hungary: "HU" },
  { Iceland: "IS" },
  { Ireland: "IE" },
  { Italy: "IT" },
  { Kazakhstan: "KZ" },
  { Kosovo: "XK" },
  { Latvia: "LV" },
  { Liechtenstein: "LI" },
  { Lithuania: "LT" },
  { Luxembourg: "LU" },
  { Malta: "MT" },
  { Moldova: "MD" },
  { Monaco: "MC" },
  { Montenegro: "ME" },
  { Netherlands: "NL" },
  { "North Macedonia": "MK" },
  { Norway: "NO" },
  { Poland: "PL" },
  { Portugal: "PT" },
  { Romania: "RO" },
  { Russia: "RU" },
  { SanMarino: "SM" },
  { Serbia: "RS" },
  { Slovakia: "SK" },
  { Slovenia: "SI" },
  { Spain: "ES" },
  { Sweden: "SE" },
  { Switzerland: "CH" },
  { Turkey: "TR" },
  { Ukraine: "UA" },
  { "United Kingdom": "GB" },
  { Vatican: "VA" }
];
let [mainSixCntrs, setMainSixCntrs]= useState([]) ;
    useEffect(()=>{
        setMainSixCntrs(
            Array.from({length: 6}, ()=>
                Object.values(europeCountries[Math.floor(Math.random()*europeCountries.length)])[0].toLowerCase()
            )
        )
    },[])
return <div>  
    <Routes>
        <Route path='/' element={<CategoriesCards countriesCardsObj={mainSixCntrs} category={'/europe'}/>}/>
        <Route path="4-Countries" element={<FourCountries allCountries={europeCountries}/>}/>
        <Route path="Quiz" element={<Quiz allCountries={europeCountries}/>}/>
        <Route path="10-seconds" element={<TimerGame allCountries={europeCountries}/>}/>
        <Route path="Flashcards" element={<Flashcards allCountries={europeCountries}/>}/>
        <Route path="Table" element={<TableCat allCountries={europeCountries}/>}/>
        <Route path="4-Flags" element={<FourFlags allCountries={europeCountries}/>}/>
    </Routes>
</div>
}

export default Europe;