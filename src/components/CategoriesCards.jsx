import React from "react";
import { Link } from "react-router-dom";
function CategoriesCards({ countriesCardsObj, category }) {
  const categoriesNames = [
    "4-Countries",
    "Quiz",
    "10-Seconds",
    "Flashcards",
    "Table",
    "4-Flags",
  ];
  return (
    <div className="min-h-screen bg-slate-600">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-rows-2 h-full">
        {countriesCardsObj.map((items, index) => (
          <div className="flex justify-center p-2" key={index}>
            <div className="h-full w-[auto] max-sm:w-[80%]  bg-[#1E1E2F] flex flex-col justify-center items-center p-2 rounded-lg shadow-2xl gap-1">
              <span
                className={`fi-${items} bg-no-repeat size-52 content-center`}
              ></span>
              <h1 className="font-press2 text-white">
                {categoriesNames[index]}
              </h1>
              <Link to={`${category}/${categoriesNames[index]}`}>
              <button className="w-32 text-sm bg-[#00ADB5] rounded-sm font-press2 hover:bg-[#00757b] transition-all">
                {categoriesNames[index] == "Table" ? "View" : categoriesNames[index]=="4-Flags"?'coming soon':'start'} 
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CategoriesCards;
