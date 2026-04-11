import React, { useContext } from 'react'
import { bookContext } from '../../Context/context';

const Books = () => {
  //   context
    const { setAddToRead } = useContext(bookContext);

    console.log( setAddToRead, 'bookcontext' );
    
  return (
    <div className='container mx-auto px-20'>
      books
    </div>
  )
}

export default Books
