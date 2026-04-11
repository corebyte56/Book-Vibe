import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const BookDetails = () => {
    const params = useParams()
    
    const books = useLoaderData()

    console.log(params);
    
  return (
    <div>
      
    </div>
  )
}

export default BookDetails
