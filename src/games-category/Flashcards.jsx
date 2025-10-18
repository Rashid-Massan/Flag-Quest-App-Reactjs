import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Flashcards({allCountries}){
    let [FourCntrsObj, setFourCntrsObj] = useState([]);
    let [FourCntrsCode, setFourCntrsCode]= useState([]);
    const [countryObj, setCountryObj]= useState({});
    const [countryCode, setCountryCode]= useState();
    const [countryName, setCountryName]= useState();
    const [flipped, setFlipped]= useState(false);
    function generatingCntrsObj(){
        const randomNum= Math.floor(Math.random()*allCountries.length);
        setCountryObj(()=>{
            return allCountries[randomNum];
        })
    };
    useEffect(()=>{
        generatingCntrsObj();
    },[])

    useEffect(()=>{
        if(countryObj && Object.values(countryObj)[0]){
            setCountryCode(()=>{
                return Object.values(countryObj)[0].toLowerCase();
            })
            setCountryName(Object.keys(countryObj)[0]);
        }
    },[countryObj]);
    return  <div className="h-screen flex justify-center">
        <div className="md:w-[70%] lg:w-[40%] bg-[#1F1F2E] h-[90%] rounded-md flex items-center flex-col max-sm:w-[90%] mt-3">
            <div className="w-full p-2">
                <Link to={-1}><span className="text-white text-3xl cursor-pointer">←</span></Link>
            </div>
          <div></div>
            <div className="w-full h-[60%] p-3 [perspective:1000px]" >
                <div className={`size-full bg-[#2A2A4F] relative [transform-style:preserve-3d] duration-500 ${flipped?'[transform:rotateY(180deg)]':''}`}>
                  <div className="size-full flex justify-center items-center absolute [transform:rotateY(0deg)] [backface-visibility:hidden]">
                     <span className={`fi-${countryCode} bg-no-repeat w-80 h-[70%] inline-block max-sm:w-[90%] `}></span>
                  </div>
                  <div className="size-full absolute content-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <h1 className="font-press2 text-center text-4xl text-white max-sm:text-xl">{countryName}</h1>
                  </div>
                </div>
            </div>
            <div className="w-full h-[20%] flex justify-center items-center gap-11">
                <button className="w-[25%] h-[50%] bg-[#38CAA8] font-press2 text-xl rounded-md hover:bg-[#2c9a80] " onClick={()=> setFlipped(!flipped)}>{flipped?'Hide':'Show'}</button>
                <button className="w-[25%] h-[50%] bg-[#38CAA8] font-press2 text-xl rounded-md hover:bg-[#2c9a80]" onClick={()=>{
                  setFlipped(false);
                  generatingCntrsObj();
                }}>Next ></button>
            </div>
        </div>
    </div>
}

export default Flashcards;