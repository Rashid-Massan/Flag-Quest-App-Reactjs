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
function Africa(){
const africanCountries = [
  { Algeria: "DZ" },
  { Angola: "AO" },
  { Benin: "BJ" },
  { Botswana: "BW" },
  { BurkinaFaso: "BF" },
  { Burundi: "BI" },
  { CaboVerde: "CV" },
  { Cameroon: "CM" },
  { Chad: "TD" },
  { Comoros: "KM" },
  { CongoRepublic: "CG" },
  { "CongoDemocraticRepublic": "CD" },
  { Djibouti: "DJ" },
  { Egypt: "EG" },
  { "EquatorialGuinea": "GQ" },
  { Eritrea: "ER" },
  { Eswatini: "SZ" },
  { Ethiopia: "ET" },
  { Gabon: "GA" },
  { Gambia: "GM" },
  { Ghana: "GH" },
  { Guinea: "GN" },
  { "GuineaBissau": "GW" },
  { IvoryCoast: "CI" },
  { Kenya: "KE" },
  { Lesotho: "LS" },
  { Liberia: "LR" },
  { Libya: "LY" },
  { Madagascar: "MG" },
  { Malawi: "MW" },
  { Mali: "ML" },
  { Mauritania: "MR" },
  { Mauritius: "MU" },
  { Morocco: "MA" },
  { Mozambique: "MZ" },
  { Namibia: "NA" },
  { Niger: "NE" },
  { Nigeria: "NG" },
  { Rwanda: "RW" },
  { "SaoTomeAndPrincipe": "ST" },
  { Senegal: "SN" },
  { Seychelles: "SC" },
  { "SierraLeone": "SL" },
  { Somalia: "SO" },
  { "SouthAfrica": "ZA" },
  { "SouthSudan": "SS" },
  { Sudan: "SD" },
  { Tanzania: "TZ" },
  { Togo: "TG" },
  { Tunisia: "TN" },
  { Uganda: "UG" },
  { Zambia: "ZM" },
  { Zimbabwe: "ZW" }
];
let [mainSixCntrs, setMainSixCntrs]= useState([]) ;
    useEffect(()=>{
        setMainSixCntrs(
            Array.from({length: 6}, ()=>
                Object.values(africanCountries[Math.floor(Math.random()*africanCountries.length)])[0].toLowerCase()
            )
        )
    },[])
return <div>  
    <Routes>
        <Route path='/' element={<CategoriesCards countriesCardsObj={mainSixCntrs} category={'/africa'}/>}/>
        <Route path="4-Countries" element={<FourCountries allCountries={africanCountries}/>}/>
        <Route path="Quiz" element={<Quiz allCountries={africanCountries}/>}/>
        <Route path="10-seconds" element={<TimerGame allCountries={africanCountries}/>}/>
        <Route path="Flashcards" element={<Flashcards allCountries={africanCountries}/>}/>
        <Route path="Table" element={<TableCat allCountries={africanCountries}/>}/>
        <Route path="4-Flags" element={<FourFlags allCountries={africanCountries}/>}/>
    </Routes>
</div>
}

export default Africa;