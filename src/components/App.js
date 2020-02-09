import React,{useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import reducer from "../reducers";
import EventForm from "./eventform"
import Events from "./events"
import AppContext from "../contexts/AppContext";

const  App = ()=> {
  
  const initialState = {
    events: []
  }
  
  const [state,dispatch] = useReducer(reducer,initialState)
  //この配列がeventというstate,dispatchがstateを更新する関数
  //この２つをuseContextでどこからでもアクセス可能にしている

  return (
    <AppContext.Provider value={{state,dispatch}}>
      <div className="container-fluid">
        <EventForm/>
        <Events/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
