import React from 'react'

const ChildComponent = React.memo((props) => {
    console.log("child component called");
  return (
    <div>
        
      <button onClick={props.functionName}>{props.buttonName}</button>
    </div>
  )
});

export default ChildComponent
