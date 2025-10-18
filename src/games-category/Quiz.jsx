import React, { useEffect, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";


function Quiz({allCountries}){
    const alphabets= Array.from({length: 26}, (item, i)=> String.fromCharCode(65+i))
    const [countryObj, setCountryObj]= useState([]);
    const [countryName, setCountryName]= useState('');
    const [randomAlphabets, setRandomAlphabets]= useState([]);
    const [emptyArr, setEmptyArr]=useState([]);
    const [wrongOptionsArr, setWrongOptionsArr]= useState([]);
    const [counter, setCounter]= useState(1);
    const [hintCounter, setHintCounter]=useState(5);
    
    function generating1CountryObj(){
        const filtered= allCountries.filter((item)=>{
            return Object.keys(item)[0].length <=10
        });
        const randomNum= Math.floor(Math.random()*filtered.length)
        setCountryObj(filtered[randomNum]);
    };

    function shuffle(array){
        let arr= array.slice();
        for(let i= arr.length - 1; i>0; i--){
            let j= Math.floor(Math.random()*(i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    function gettingRandomAlphabets(){
        if(countryName){

            const pickedAlphabets= Array.from({length: 18-countryName.length}, ()=>{
                return alphabets[Math.floor(Math.random()*alphabets.length)];
            })
            const sideArr= [...Array.from(countryName), ...pickedAlphabets];
            setRandomAlphabets(shuffle(sideArr));    
        };
    };

    function checkingAlphabets(index){
        let i= countryName.indexOf(randomAlphabets[index]);
        if(i!== -1){
            setEmptyArr((prev)=>{
                let newArr= [...prev];
                Array.from(countryName).forEach((item,idx)=>{
                    if(item==randomAlphabets[index]){
                        newArr[idx]=randomAlphabets[index];
                    }
                })
                return newArr;
            });
        }else{
            setWrongOptionsArr([...wrongOptionsArr,index]);
        }
        

        
    };
    function hintRandering(){
        Array.from(countryName).some((item,index)=>{
            if(emptyArr.includes(item)){

            }else if(hintCounter>0){
                setEmptyArr((prev)=>{
                    let newArr= [...prev];
                    newArr[index]=item
                    return newArr;
                })
                setHintCounter(hintCounter-1);
                return true;
            }
        })
    }
    
    useEffect(()=>{
        if(emptyArr.length>0){
            if(emptyArr.every(item=> item!="")){
                setTimeout(() => {
                    generating1CountryObj();
                    setCounter(counter+1);
                    setWrongOptionsArr([])
                }, 500);
            }
        }

    },[emptyArr])
    useEffect(()=>{
        generating1CountryObj();
    },[])
    
    useEffect(()=>{
        if(Object.keys(countryObj)[0]){
            setCountryName((Object.keys(countryObj)[0].toUpperCase()).replace(/\s+/g, ""));
        }
    },[countryObj]);
    
    useEffect(()=>{
        gettingRandomAlphabets();
        setEmptyArr(new Array(countryName.length).fill(""))
    },[countryName]);
    
    return <div className="h-screen flex justify-center p-3">
        <div className="md:w-[70%] lg:w-[40%] bg-[#1F1F2E] h-[90%] rounded-md flex items-center flex-col max-sm:w-[90%]">
            <div className="flex w-full justify-between p-2 pl-4 pr-4 items-center">
                <Link to={-1}><span className="text-white text-3xl cursor-pointer">←</span></Link>
                <h1 className={`font-press2 text-white`}>{counter}</h1> 
                <div className="flex items-center gap-1 bg-[#0C0C2F] p-1 rounded-md cursor-pointer" onClick={hintRandering}>
                    <FaRegLightbulb className="text-yellow-400 size-5"/>
                    <h1 className="text-white">{hintCounter}</h1>
                </div>
            </div>
            <span className={`fi-${Object.values(countryObj).length>0 ?Object.values(countryObj)[0].toLowerCase():''} bg-no-repeat w-80 h-[50%] inline-block max-sm:w-[90%] `}></span>

            <div className={`flex justify-center gap-3 mt-4 pl-4 pr-4 w-full`}>
                {emptyArr.map((item, index)=>{
                    return <div className="bg-[#4A4A93] flex size-8 max-sm:size-6 rounded-md text-[#07FFF7] font-press2 text-center items-center justify-center" key={index}>
                        {item}
                    </div>
                })}
            </div>
            <div className="grid grid-rows-2 grid-cols-9 gap-2 mt-5 max-sm:grid-rows-3 max-sm:grid-cols-6">
                {randomAlphabets.map((item, index)=>{
                    return <div className={`bg-[#64648B] size-10 rounded-md cursor-pointer font-press2 text-white content-center text-center text-lg hover:bg-[#505070] overflow-hidden`} key={index}>
                        <button className={`size-full ${wrongOptionsArr.includes(index)?'bg-red-600 ':''}`} onClick={()=>checkingAlphabets(index)}>{item}</button>
                    </div>
                })}
            </div>



        </div>
    
</div>
}

export default Quiz