import React,{useContext} from "react"    
import Event from "./event"
import AppContext from "../contexts/AppContext";

const Events = ()=>{
  const {state} = useContext(AppContext)
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {state.events.map((event,index)=>
          // ここでstateの配列をeventとしてprops経由でEventのcomponentに渡している
          (<Event key={index} event={event}/>))}
        </tbody>
      </table>
    </>
  )
}
export default Events
      