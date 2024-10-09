import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/Action";



function Counter() {
    const count = useSelector((state)=>state.count);//to get the data from redux we use useSelector
    const userName = useSelector((state)=>state.userName);

    //to send and data to redux we use useDispatch
    const dispatch = useDispatch();

  return (
    <div>
      <h2>Name: {userName}</h2>
      {/* In below line we have called a increment function with payload inside from Action.jsx file */}
      <button onClick={()=>dispatch(increment(1))}>Increment</button>
      <button onClick={()=>dispatch(increment(2))}>Increment by 2</button>
      <p>{count}</p>
      <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
      <button onClick={()=>dispatch(decrement(2))}>Decrement by 2</button>
    </div>
  )
}

export default Counter
