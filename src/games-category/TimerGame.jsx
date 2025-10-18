import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

function TimerGame({allCountries}){
    let [FourCntrsObj, setFourCntrsObj] = useState([]);
    let [FourCntrsCode, setFourCntrsCode]= useState([]);
    let [FourCntrsName, setFourCntrsName]= useState([]);
    let [randomNum, setRandomNum]= useState();
    let [counter, setCounter]= useState(1);
    let [wrongOptionArr, setWrongOptionArr]= useState([]);
    let [correctOptionNum, setCorrectOptionNum]= useState();
    let [numberOfLives, setNumberOfLives]= useState(3);
    let [timer, setTimer]=useState(10);
    const intervalRef= useRef(null);

    function generatingFourCntrsObj(){
        setFourCntrsObj(
            Array.from({length: 4}, ()=>{
                return allCountries[Math.floor(Math.random()*allCountries.length)]
            })
        )
    };

    function resetGame(){
                generatingFourCntrsObj();
                setNumberOfLives(3);
                setCounter(1);
                setWrongOptionArr([]);
                startCountDown();
    }

    function checkingOption(index){
        if(index == randomNum){
            setCorrectOptionNum(index)
            setTimeout(() => {
                generatingFourCntrsObj();
                setCounter(counter+1);
                setWrongOptionArr([]);
                setCorrectOptionNum();
                startCountDown();
            }, 400);
        } else{
            setWrongOptionArr([...wrongOptionArr, index]);
        }
    }
    function loseLife(){
        if(numberOfLives>0){
            setNumberOfLives(numberOfLives -1)
        }
    } 
    useEffect(()=>{
        generatingFourCntrsObj();
        startCountDown();
        return ()=> clearInterval(intervalRef.current);

    }, [])
    
    useEffect(()=>{
        if(FourCntrsObj.length>0){
            setFourCntrsCode(FourCntrsObj.map((item)=> {return Object.values(item)[0].toLowerCase()}))
            setFourCntrsName(FourCntrsObj.map((item)=> {
                return Object.keys(item)[0]
            }))
            setRandomNum(Math.floor(Math.random()*4))
        }
    },[FourCntrsObj])


    function startCountDown(){
      if(intervalRef.current) clearInterval(intervalRef.current);
      setTimer(10);
      intervalRef.current= setInterval(() => {
        setTimer((prev)=>{
          if(prev<=0){
            clearInterval(intervalRef.current);
            // generatingFourCntrsObj();
            setNumberOfLives(0);
            return 0;
          };
          return prev-1;
        })
      }, 1000);
    };
    let [width, setWidth]= useState(100);
  useEffect(() => {
    setWidth((timer / 10) * 100);
  }, [timer]);
return <div className="h-screen flex justify-center">
    <div className="md:w-[70%] lg:w-[40%] bg-[#1F1F2E] h-[90%] rounded-md flex items-center flex-col max-sm:w-[90%] mt-3">
        <div className="flex w-full justify-between p-2 items-center h-[8%] ">
            <Link to={-1}><span className="text-white text-3xl cursor-pointer">←</span></Link>
            <h1 className={`font-press2 ${numberOfLives<2?'text-red-400':'text-white'}`}>{counter}</h1> 
        </div>
        <div className="h-2 w-full mb-5 flex justify-center">
            <div className="w-[90%] h-full rounded-md overflow-hidden">
                <div style={{width: `${width}%`, transition: 'width 1s linear'}} className={`h-full ${timer<=4?'bg-red-600':'bg-green-500'} transition-colors`} >

                </div>
            </div>
        </div>
        <span className={`fi-${FourCntrsCode[randomNum]} bg-no-repeat w-80 h-[50%] inline-block max-sm:w-[90%] `}></span>
        <div className="grid w-full grid-rows-2 grid-cols-2 mt-5 h-[40%]">
            {FourCntrsName.map((item, index)=>{
                return <div className="font-sans text-xl text-white text-center box-border bg-gray-600 m-2 flex items-center justify-center" key={index}>
                <button className={`size-full ${correctOptionNum==index?'bg-green-500 hover:bg-green-700':''} ${wrongOptionArr.includes(index)?'bg-red-500 hover:bg-red-700':''} hover:bg-gray-700 `} onClick={()=>checkingOption(index)}>{item}</button>
                </div>
            })}
        </div>
    </div>
    <div className={`absolute bg-[#000000c9] size-full flex justify-center items-center ${numberOfLives==0?'scale-100':'scale-0'} transition-all flex-col gap-8`}>
            <h1 className="font-press2 text-red-500 text-7xl max-sm:text-4xl">You Lost!💀</h1>
            <button className="font-press2 text-white hover:text-green-400" onClick={()=>resetGame()}>Try Again....</button>
    </div>
</div>
}
export default TimerGame;