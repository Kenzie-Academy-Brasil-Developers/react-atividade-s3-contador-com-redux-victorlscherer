import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/Counter/actions";

const Counter = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(addNumber(1))} >Add +</button>
            <button onClick={() => dispatch(subNumber(1))} >Add -</button>
        </div>
    )
}

export default Counter;