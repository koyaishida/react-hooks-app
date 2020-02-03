import React,{useState} from 'react';


const App= ()=> {
  const [count, setCount] = useState(0)
    //useStateの引数は初期値,
    //count = state ,setCountはcountの値を操作する関数名
    //countの値を変更するsetStateの役割
  const increment = ()=> setCount(count + 1)
  const decrement = ()=> setCount(count - 1)
  const increment2 = () =>setCount( previousCount =>
    previousCount + 1
  )
  const decrement2 = () =>setCount( previousCount =>
    previousCount - 1
  )
  const reset = ()=> setCount(0)
  
  const double =()=> setCount(count * 2)
  
  const divide3 = () =>setCount( previousCount =>
     previousCount%3 === 0 ? previousCount / 3 : previousCount
  )
  
  return (
    <React.Fragment>
      <div>
      count : {count} 
      </div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={double}>×2</button>
      </div>
      <div>
        <button onClick={divide3}>３の倍数の時だけ３で割る</button>
      </div>
    </React.Fragment>
  );
}

export default App;
