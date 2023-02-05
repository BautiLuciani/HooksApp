import React from 'react'
import useCounter from '../hooks/useCounter'
import useFetch from '../hooks/useFetch'
import LoadingTitle from './LoadingTitle'
import Title from './Title'

const MultipleCustomHook = () => {
  
    const {counter, aumentar} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://api.giphy.com/v1/gifs/search?api_key=gAP1PHhymYEZGMX1di9YXOaXStx3nncB&q=Valorant&limit=${counter}`)

    // title intenta cargar cuando data es undefined (porque todavia no cargo la api), lo cual lanza un error
    // por eso utilizamos !!data
    // data → undefined
    // !data → !undefined → false
    // !!data → !false → true
    const title = !!data && data.map((item)=>{
        return [item.title]
    })

  return (
    <>
        <h1>Valorant Title</h1>
        <hr />

        {
          isLoading
          ? <LoadingTitle/>
          : <Title title={title}/>
        }

        <button className='btn btn-primary' onClick={aumentar}>Next Title</button>

    </>
    
  )
}

export default MultipleCustomHook