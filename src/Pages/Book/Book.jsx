import React, { use } from 'react'

const Book = ({aBook}) => {
    // const data = use(bookPromise)
    // console.log(aBook)
    const {bookName, author, image, rating, category} = aBook;
  return (
    <div>
       
       <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4 bg-gray-200 w-2/3 mx-auto'>
    <img className='h-[166px]'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Book