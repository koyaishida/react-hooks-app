import React from "react";


const Log = ({operationLog})=>{
  //event=state[]はevents.jsからpropsとして受け取る


return (
  <tr>
    <td>{operationLog.description}</td>
    <td>{operationLog.operationAt}</td>
  </tr>
)
}

export default Log