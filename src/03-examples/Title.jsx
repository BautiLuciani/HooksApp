import React from 'react'

const Title = ({title}) => {
  return (
    <blockquote className='blockquote text-end'>
        <p className='mb-3'>{title}</p>
        <footer className='blockquote-footer mt'>Valorant</footer>
    </blockquote>
  )
}

export default Title