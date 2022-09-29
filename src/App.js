import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement } from './Actions/Action';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  return (
    <div className="App">
      <h1>React-Redux</h1>
      <h1>{counter}</h1>
      <div>
          <button onClick={() => dispatch(Increment())}>+</button>
          <button onClick={() => dispatch(Decrement())}>-</button>
      </div>
      
    </div>
  );
}

export default App;

/* Actions

const Increment = () =>{
  return {
    type : 'Increment'
  }
}

const Decrement = () =>{
  return {
    type : 'Decrement'
  }
}

Reducers 

const counter = (state = 0, action) => {
        switch(action.type){
          case('Increment'):
            return state + 1
          
          case('Decrement'):
            return state - 1

          default:
            return state
        }
}

*/