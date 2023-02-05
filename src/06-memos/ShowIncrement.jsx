import React from 'react'

const ShowIncrement = React.memo(({aumentar}) => {

    console.log('sumando');

  return (
    <>
      <button className='btn btn-primary' onClick={()=>aumentar(1)}>+1</button>
      <button className='btn btn-secondary' onClick={()=>aumentar(2)}>+2</button>
      <button className='btn btn-success' onClick={()=>aumentar(3)}>+3</button>
      <button className='btn btn-danger' onClick={()=>aumentar(4)}>+4</button>
      <button className='btn btn-warning' onClick={()=>aumentar(5)}>+5</button>
    </>
  )
})

export default ShowIncrement