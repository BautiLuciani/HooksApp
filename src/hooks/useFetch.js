import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getTitle = async()=>{

        // con este setState lo que estamos haciendo es que isLoading vuelva a true cada vez que se cambie la url
        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const {data} = await resp.json()

        setState({
            // data: data,
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
      getTitle()
    }, [url])
    

  return {
    // aca podriamos retornar simplemente el state
    // pero lo vamos a hacer de la siguiente manera porque es mas facil si despues queremos agregar mas cosas a retornar (por ejemplo el getTitle())
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

export default useFetch