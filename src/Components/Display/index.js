import { useSelector } from "react-redux";

const Display = () => {

    const counter = useSelector(store => store.counter)

    return (
        <div>{counter}</div>
    )
}

export default Display;