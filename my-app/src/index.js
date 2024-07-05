import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter03/Library';
import Student from './chapter03/Student';
import List from './chapter03/List';
import ConfirmDialog from './chapter04/ConfirmDialog';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
import Comment from './chapter05/Comment';
import BoardList from './chapter05/BoardList';
import NotificationList from './chapter06/NotificationList';
import Counter from './chapter07/Counter';
import Info from './chapter07/Info';
import Average from './chapter07/Average';
import Accommodate from './chapter07/Accommodate';
import Say from './chapter08/Say';
import Toggle from './chapter08/Toggle';
import ConfirmButton from './chapter08/ConfirmButton';
import EventPractice from './chapter08/EventPractice';
import AsyncTask from './chapter09/AsyncTask';
import Fetch from './chapter09/Fetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=>{
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Library/> */}
    {/*  <Student/> */}
    {/* <List/> */} 
    {/* <ConfirmDialog/> */}
    {/* <Clock/> */}
    {/* <PropsEx/> */}
    {/* <CommentList/> */}
    {/* <BoardList/> */}
    {/* <NotificationList/> */}
    {/* <Counter/>
    <Average/>
    <Info/>
    <useInputs/>
    <Accommodate/> */}
    <Say/>
    <Toggle/>
    <ConfirmButton/>
    <EventPractice/>
  <AsyncTask/>
  <Fetch/>
  </React.StrictMode>
);

// },1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
