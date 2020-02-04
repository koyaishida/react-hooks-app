import React,{useState} from 'react';


const App= (props)=> {

  const [state,setState] = useState(props)
  const {name,price} = state

  return (
    <React.Fragment>
      <p>{state.name}は{state.price}です</p>
      <button onClick={()=>setState({...state,price: price + 100})}>+100</button>
      <button onClick={()=>setState({...state,price: price - 100})}>-100</button>
      <button onClick={()=>setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </React.Fragment>
  );
}

App.defaultProps = {
  name: "サンプル",
  price: 1000
}

export default App;
