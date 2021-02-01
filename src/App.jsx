import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>{counter}</div>
      <button type='button' onClick={() => dispatch({ type: 'INCREMENT' })}>
        INCREMENT
      </button>
      <button type='button' onClick={() => dispatch({ type: 'DECREMENT' })}>
        DECREMENT
      </button>
    </div>
  );
}

export default App;
