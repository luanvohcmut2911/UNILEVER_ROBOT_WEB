import {handleClick} from './controller/control';

function App() {
  return (
    <div>
      <button onClick={()=>{
        handleClick("open")
      }}>OPEN LED MODULE</button>
      <button onClick={()=>{
        handleClick("close")
      }}>CLOSE LED MODULE</button>
      <button onClick={()=>{
        handleClick("open-motor")
      }}>OPEN MOTOR MODULE</button>
      <button onClick={()=>{
        handleClick("close-motor")
      }}>CLOSE MOTOR MODULE</button>
    </div>
  );
}

export default App;
