import React from "react";


const Log = ({operationLogs})=>{
  //event=state[]はevents.jsからpropsとして受け取る
const description = operationLogs.description
const operationAt = operationLogs.operationAt


return (
  <tr>
    <td>{description}</td>
    <td>{operationAt}</td>
  </tr>
)
}

export default Log