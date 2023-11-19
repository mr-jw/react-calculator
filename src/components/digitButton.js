import { _actions } from "../App"

export default function DigitButton({dispatch, digit}) {
    return (
    <button 
        onClick={() => dispatch( { type: _actions.DIGIT, payload: { digit } })}
    >    
        {digit}
    </button>
    )
}