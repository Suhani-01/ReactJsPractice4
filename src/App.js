
import { useMemo, useRef, useState} from 'react';
import './App.css';

function App(){

  const [count,setCount]=useState(0)
  const [input,setInput]=useState(0)

  function expensive(value){
    console.log("I am running")
    for(let i=0;i<1000000000;i++){}
    console.log("I stopped")
    return value*value;
    
  }

  // let answer=expensive(input);
  let answer=useMemo(()=>expensive(input),[input])

  return(
    <div>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <div>Count : {count}</div>
      <input value={input} onChange={(e)=>{setInput(Number(e.target.value))}} type="number" />
      <div>{answer}</div>
      
    </div>
  )
}

//stop watch
// function App(){
//   const [time,setTime]=useState(0);
//   let timerRef=useRef(null);

//   function startTimer(){
//     timerRef.current=setInterval(()=>{
//       setTime(time=>time+1);
//     },1000);
//   }

//   function stopTimer(){
//     clearInterval(timerRef.current);
//     timerRef.current=null;
//   }

//   function resetTimer(){
//     stopTimer();
//     setTime(0);
//   }

//   return(
//     <div>
//       <h1>StopWatch : {time} seconds</h1>
//       <button onClick={startTimer}>Start</button>
//       <br/>
//       <br/>
//       <button onClick={stopTimer}>Stop</button>
//       <br/>
//       <br/>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }

// function App() {
//   let box=useRef(null);
//   function handleClick(){
//     box.current.style.backgroundColor="red";
//   }


//   return(
//     <div>
//       <div ref={box}>Hello There</div>
//       <button onClick={handleClick}>Change Color</button>

//     </div>
//   )
  // let value=useRef(0);
  // //let value=0;
  // const [count,setCount]=useState(0);

  // function handleClick(){
  //   setCount(count+1);
  //   value.current=value.current+1;
  //   console.log(value.current);
  //   //value=value+1;
  //   //console.log(value);
  // }

  
  // return (
  //   <div>
  //     <button onClick={handleClick}>Increment Count</button>
  //     <div>Count : {count}</div>
  //   </div>
  // );
// }

export default App;
