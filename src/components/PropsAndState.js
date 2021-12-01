import React, { useState } from "react"


export const PropsAndState = ({ yourName }) => {
  //First thing in bracket (countClicks) is the information we are storing
  //Second thing in bracked (setCountClicks) is what we are going to change in the function
  //useState is starting value
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modifiy it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}

