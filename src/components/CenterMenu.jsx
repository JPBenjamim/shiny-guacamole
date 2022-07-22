import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between md:flex w-[100%] justify-between sm:flex w-[100%] justify-between'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Sobre</li>
            <li className={liStyle}>Contato</li>
            <li className={liStyle}>Agenda</li>
        </ul>
    </div>
    )
}

export default CenterMenu