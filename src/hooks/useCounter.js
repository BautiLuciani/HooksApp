import { useState } from "react"

const useCounter = (initialValue = 0)=>{

    const [counter, setCounter] = useState(initialValue)

    const aumentar = ()=>{
        setCounter(counter+1)
    }

    const aumentarDe2 = (value)=>{
        setCounter(counter + value)
    }

    const resetear = ()=>{
        setCounter(initialValue)
    }

    const restar = ()=>{
        // if(counter === -10) return;
        setCounter(counter-1)
    }

    const restarDe2 = (value)=>{
        setCounter(counter - value)
    }

    return{
        counter,
        aumentar,
        aumentarDe2,
        resetear,
        restar,
        restarDe2,
    }
}

export default useCounter