import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <div className='mt-4 my-3 flex flex-wrap gap-8'>
    <div className="card bg-base-100 h-80 w-full md:w-80 flex  shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 text-white dark:border ">
  <figure>
    <img className='w-full md:w-80'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>I{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer  hover:bg-pink-500 duration-200 text-white ">Buy now</div>
    </div>
  </div>
</div>
    </div>
      
    </>
  )
}

export default Card
