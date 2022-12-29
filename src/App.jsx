import { useDispatch, useSelector } from "react-redux";

import reactLogo from "./assets/react.svg";
import "./App.css";
import { increment, decrement, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter); //4.extraemos el estado mediante el hooks useSelector
  const dispatch = useDispatch(); //5.extraemos la funcion seteadora dispatch del hook para cambiar el estado
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{counter}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  );
}

export default App;
