import React from "react";
import * as doAsync from './doAsync';

//import axios from 'axios';
function AsyncTask(props){
    const onPrintMe=()=>{
        setTimeout(doAsync.PrintMe,3000);
        console.log("대기중");
    }
    const onCallback=()=>{
            console.log("작업시작");
            doAsync.increaseCallback(0,result=>{
                console.log(result);
            })
            console.log("작업종료");
    }
    const onAsyncAwait=async()=>{//async function onAsyncAwait(){}
        try{
            let result=await doAsync.increaseAsync(0);
            console.log(result);
            result=await doAsync.increaseAsync(result);
            console.log(result);
            result=await doAsync.increaseAsync(result);
            console.log(result);
            result=await doAsync.increaseAsync(result);
            console.log(result);
            result=await doAsync.increaseAsync(result);
            console.log(result);
        }catch(e){
            console.error(e);
        }
    }
    return(
        <div>
        <button onClick={onPrintMe}>printMe</button>
        <button onClick={onCallback}>callback</button>
        <button onClick={onPromise}>promise</button>
        <button onClick={onAsyncAwait}>async_await</button>
        </div>
    );
}
export default AsyncTask;