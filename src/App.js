import './App.css';
import {useDispatch, useSelector} from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = (amount) => {
    // dispatcher takes action - object with typw and payload
    dispatch({
      type: 'ADD_CASH',
      payload: amount
    });
  }

  const getCash = (amount) => {
    dispatch({
      type: 'GET_CASH',
      payload: amount
    })
  }


  return (
    <div className="App">
      <h1>Total: {cash}</h1>
      <button onClick={() => addCash(Number(prompt('how much you want to add?', 0)))}>Add cash</button>
      <button onClick={() => getCash(Number(prompt('how much you wat to get?', 0)))}>Get cash</button>
    </div>
  );
}

export default App;
