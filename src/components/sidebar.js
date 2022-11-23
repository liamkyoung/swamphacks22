import React from 'react'
import Dropdown from './dropdown'
import Image from 'next/image'
import LibraryIcon from '@heroicons/react/solid/LibraryIcon'
import MenuIcon from '@heroicons/react/solid/MenuIcon'
import Calendar from './calendar'
import SearchBar from './searchbar'
import Link from 'next/link'
import logo from '../../public/logo.png'

function Sidebar({ callback }) {
  const schools = [
    {
      id: 1,
      name: 'University of Florida',
      unavailable: false,
    },
    {
      id: 2,
      name: 'Florida State University',
      unavailable: false,
    },
    {
      id: 3,
      name: 'University of Central Florida',
      unavailable: false,
    },
    {
      id: 4,
      name: 'University of South Florida',
      unavailable: true,
    },
  ]

  return (
    <div className="relative h-screen">
      <div className="absolute right-8 top-2 md:hidden cursor-pointer z-100">
        <MenuIcon className="h-14 w-14 text-ORANGE" />
      </div>
      <div className="campussy1 hidden md:flex flex-col px-12 py-12 text-center justify-between h-full">
        <div className="text-ORANGE hover:text-BLUE hover:cursor-pointer">
          <Link href="/">
            <div className="flex flex-col justify-center items-center">
              <Image alt="Campus Logo" src={logo} width={96} height={96} />
              <h1 className="text-3xl font-mono">Campus</h1>
            </div>
          </Link>
        </div>
        <SearchBar />
        <Dropdown items={schools} />
        <Calendar
          callback={callback}
          view={'dayGridMonth'}
          className="flex-grow"
        />
      </div>
    </div>
  )
}

export default Sidebar
