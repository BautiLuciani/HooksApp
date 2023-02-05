import React, { useCallback, useEffect, useState } from 'react';
import ShowIncrement2 from './ShowIncrement2';

const CallbackHook2 = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
    
    
    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }


    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement2 increment={ incrementFather } />
        </>
    )
}

export default CallbackHook2