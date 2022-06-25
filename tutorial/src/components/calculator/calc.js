import './calc.css'

import React, {useState} from 'react'

const Calc = () => {
    const [input, setInput] = useState("");

    const Calculate = (event) => {
        setInput(input.concat(event.target.value));
    }

    //function to clear all the input at once
    const Clear = () => {
        setInput("");
    }

    //deleting each input
    const Delete = () => {
        setInput(input.slice(0, -1));
    }

    //function to perform an operation
    const Result = () => {
        try {
            setInput(eval(input).toString())
        } catch (error) {
            setInput("Error");
        }
    }
    
  return (
      <div className="container_1">
          <h1>My React Calculator App</h1>
          <div className="calculator">
              <div className="screen">
                  <form action="">
                      <input type="text" placeholder="0" id="input__text" value={input} />
                  </form>
              </div>
              <div className="keyboard">
                    <button className="operator" onClick={Clear} id="clear" >C</button>
                    <button className="operator" onClick={Delete} id="backspace" >CE</button>
                    <button className="operator" onClick={Calculate} value="%">%</button>

                    <button className="operator" onClick={Calculate} value="/">&divide;</button>

                    <button onClick={Calculate} value="7">7</button>
                    <button onClick={Calculate} value="8">8</button>
                    <button onClick={Calculate} value="9">9</button>

                    <button className="operator" onClick={Calculate} value="*">&times;</button>
                  
                    <button onClick={Calculate} value="4">4</button>
                    <button onClick={Calculate} value="5">5</button>
                    <button onClick={Calculate} value="6">6</button>

                    <button className="operator" onClick={Calculate} value="-">-</button>

                    <button onClick={Calculate} value="1">1</button>
                    <button onClick={Calculate} value="2">2</button>
                    <button onClick={Calculate} value="3">3</button>

                    <button className="operator" onClick={Calculate} value="+">+</button>

                    <button onClick={Calculate} value="0">0</button>
                    <button onClick={Calculate} value=".">.</button>
                  
                    <button className="operator" onClick={Result} id="result" value="=">=</button>
                  
              </div>
          </div>
      
    </div>
  )
}

export default Calc
