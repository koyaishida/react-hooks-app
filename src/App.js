import React,{useState} from 'react';


const App= (props)=> {

  const [name,setName] = useState(props.name)
  const [price,setPrice] = useState(props.price)
  const reset = ()=>{
    setName(props.name)
    setPrice(props.price)
  }
  //resetを呼び出すときに()はいらないのか？

  return (
    <React.Fragment>
      <p>{name}は{price}です</p>
      <button onClick={()=>setPrice(price + 100)}>+100</button>
      <button onClick={()=>setPrice(price - 100)}>-100</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </React.Fragment>
  );
}

App.defaultProps = {
  name: "サンプル",
  price: 1000
}

export default App;
