import React,{useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import reducer from "../reducers";
import EventForm from "./eventform"
import Events from "./events"

const  App = ()=> {
  
  const [state,dispatch] = useReducer(reducer,[])
  //この配列がeventというstate,dispatchがstateを更新する関数
  //この２つをpropsとしてEventFrom,Eventsに渡している
  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
