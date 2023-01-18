import { useState } from "react";
import React from 'react'

const CounterExample = ({props}) => {
   
   //represent state values
    let [counterval,setCounterVal]=useState(0);



    function IncrementByOne(){
        console.log('clicked me ',counterval)
        setCounterVal(counterval+1)

    }
    function DecrementByOne(){
        setCounterVal((counterval)=>counterval-1)
    }
    function IncrementByTen(){
        console.log('clicked me ',counterval)
        setCounterVal((x)=>x+10)
    }
    function DecrementByTen(){
        setCounterVal((counterval)=>counterval-10)
    }
    function resetCounter(){
        setCounterVal(0)
    }



    return (
        <div style={{backgroundColor:'orange'}}>
            <h1> Counter Example</h1>
            <> Counter value is {counterval}</>
            <>
                <h5>Increment by 1</h5>
                <button onClick={IncrementByOne}> +1 </button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={DecrementByOne}> -1 </button>
            </>

            <>
                <h5>Increment by 10</h5>
                <button onClick={IncrementByTen}> +10 </button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={DecrementByTen}> -10 </button>
            </>


            <div>
            <button onClick={resetCounter}>Reset Counter</button>
            </div>
        </div>
    )
}

export default CounterExample