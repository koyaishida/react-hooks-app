 
import {DELETE_ALL_EVENTS,DELETE_EVENT,CREATE_EVENT} from "../actions"

const events = (state = [], action )=>{
                //stateの初期値
  switch(action.type){
 //eventFromのdispatvhで定義されたものをactionとして受け取る
    case CREATE_EVENT:
      console.log(action)
      const event = {title: action.title, body: action.body,}
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id +1

      return [...state, { id,...event}]
      
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id)

    case DELETE_ALL_EVENTS:
      return []

    default :
    return state
  }
}

export default  events;