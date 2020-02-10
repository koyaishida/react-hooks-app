import React,{useContext,} from "react"
import AppContext from "../contexts/AppContext"
import Log from "./log"


const Logs = ()=>{
  const {state} = useContext(AppContext)
  return (
    <>
    <h4>操作ログ一覧</h4>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>内容</th>
          <th>日時</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {state.operationLogs.map((operationLogs,index)=>
        (<Log key={index} operationLogs={operationLogs}/>))}
      </tbody>
    </table>
  </>
  )
}
export default Logs