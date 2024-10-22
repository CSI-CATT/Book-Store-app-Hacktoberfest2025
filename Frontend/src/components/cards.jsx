import React from 'react'

function cards({ item }) {
    return (
        <>
            <div className="card bg-slate-100 text-black w-80 md:w-96 shadow md:shadow-xl my-3 hover:scale-105 duration-100  dark:text-black dark:border-x-2 ">
                <figure>
                    <img className=''
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex justify-center">
                        {item.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className=' flex justify-center'>{item.category}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="badge badge-outline hover:bg-lime-500 hover:text-white ">Buy Now</div>
                    </div>
                </div>
            </div></>
    )
}

export default cards