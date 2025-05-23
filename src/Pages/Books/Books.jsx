import React, { Suspense, useEffect, useState } from 'react'
import Book from '../Book/Book'

const Books = ({data}) => {

// const [allBooks, setAllBooks] = useState([])

// useEffect(()=>{
//     fetch("booksData.json").then(res => res.json()).then(data => {
//       console.log(data)  
//         setAllBooks(data)
//     })
// },[])

// const bookPromise = fetch('./booksData.json').then(res => res.json())

  return (
    <div>
        <h1 className='text-3xl text-center p-6'> Hello I am boooks</h1>
    
    <Suspense fallback={<span>Loading...</span>}>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
   {
        data.map((aBook)=><Book key={aBook.bookId} aBook={aBook}></Book>)
    }
   </div>
    </Suspense>
    </div>
  )
}

export default Books