import React,{useReducer,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import reducer from "../reducers";
import EventForm from "./eventform"
import Events from "./events"
import Logs from "./logs"
import AppContext from "../contexts/AppContext";

const APP_KEY = "appWithRedux"

const  App = ()=> {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }

  const [state,dispatch] = useReducer(reducer,initialState)
  //この配列がeventというstate,dispatchがstateを更新する関数
  //この２つをuseContextでどこからでもアクセス可能にしている
  useEffect(()=>{
   localStorage.setItem(APP_KEY,JSON.stringify(state))
  },[state])

  return (
    <AppContext.Provider value={{state,dispatch}}>
      <div className="container-fluid">
        <EventForm/>
        <Events/>
        <Logs />
      </div>
    </AppContext.Provider>
  );
}

export default App;
