import React from 'react'
import menu from '../lib/menu'

const Header = () => {
  return (
    <header className="fixed w-full bg-[#121212] text-white px-20 py-4 top-0">
      <nav className="flex items-center justify-between flex-wrap">
        <div>
          <a href="/" className="text-4xl font-bold tracking-tighter leading-none"> Envisiona </a>
        </div>
        <ul className='flex gap-8 items-center'>
          {
            menu.map((item, key) => {
              return (
                <li key={key} className='px-2 hover:text-cyan-500'> {item.name} </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header