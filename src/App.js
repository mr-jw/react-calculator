import { useReducer } from 'react';
import DigitButton from './components/digitButton';
import OperationButton from './components/operationButton';
import './styles.css';

export const _actions = {
  DIGIT: 'digit',
  OPERATION: 'operation',
  CLEAR: 'clear',
  DELETE: 'delete',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){
switch(type){
  case _actions.DIGIT:
    return {
      ...state,
      currentOperand: `${state.currentOperand || ""}${payload.digit}`
    }
}
}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(
    reducer, 
    {}
  )

  return (
    <div className='calculator-grid'> 
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation} </div>
        <div className='current-operand'>{currentOperand}</div>
      </div>

      <button className='span-two'>AC</button>
      <button>DEL</button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
    
      <button className='span-two'>=</button>
    </div>
  );
}

export default App;
