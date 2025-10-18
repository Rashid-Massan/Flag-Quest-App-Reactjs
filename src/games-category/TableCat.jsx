import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function TableCat({allCountries}){
return <div className="h-screen flex justify-center pt-3 ">
    <div className="md:w-[70%] lg:w-[40%] bg-[#1F1F2E] h-[90%] rounded-md flex items-center flex-col max-sm:w-[90%] p-2">
        <div className="w-full h-[10%] relative flex justify-center items-center border-b-2 border-white">
            <Link to={-1} className="absolute left-0 p-2"><span className="text-white text-4xl cursor-pointer">←</span></Link>
            <h1 className={`font-press2 text-center text-white text-2xl`}>Table</h1> 
        </div>
        <div className="h-[90%] w-full pl-3 pr-3 overflow-y-scroll [scrollbar-width:thin] [scrollbar-color:#888_transparent]">
            {allCountries.map((item)=>{
                return <div className="w-full h-[15%] flex justify-between items-center border-b-[1px] border-[#7D7D7D]">
                <h1 className="text-white">{Object.keys(item)[0]}</h1>
                <img src={`https://flagsapi.com/${Object.values(item)[0]}/shiny/64.png`} className="size-12"></img>
            </div>
            })}
        </div>
    </div>
</div>
}
export default TableCat;