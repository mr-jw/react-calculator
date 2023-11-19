import { _actions } from "../App"

export default function OperationButtonButton({dispatch, operation}) {
    return (
    <button 
        onClick={() => dispatch( { type: _actions.OPERATION, payload: { operation } })}
    >    
        {operation}
    </button>
    )
}