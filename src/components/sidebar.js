import React from 'react';
import Dropdown from './dropdown';
import Image from 'next/image'
import LibraryIcon from '@heroicons/react/solid/LibraryIcon'
import MenuIcon from '@heroicons/react/solid/MenuIcon'
import Calendar from './calendar'
import SearchBar from './searchbar'
import Link from 'next/link'

function Sidebar () {
  const schools = [
      {
          id: 1,
          name: 'University of Florida',
          unavailable: false
      },
      {
        id: 2,
        name: 'Florida State University',
        unavailable: false
      },
      {
        id: 3,
        name: 'University of Central Florida',
        unavailable: false
      },
      {
        id: 4,
        name: 'University of South Florida',
        unavailable: true
      }
  ]

  return (
    <div className='relative h-screen'>
      <div className='absolute right-10 top-16 md:hidden cursor-pointer z-100'>
        <MenuIcon className='h-12 w-12' />
      </div>
      <div className='hidden md:flex flex-col bg-GRAY px-12 py-12 text-center justify-between h-full'>
        <div className='text-BLUE hover:text-ORANGE hover:cursor-pointer'>
            <Link href="/">
                <div className='flex flex-col justify-center items-center'>
                    <LibraryIcon className='w-16 h-16' />
                    <h1 className='text-xl'>Campus</h1>
                </div>
            </Link>
        </div>
        
        <Dropdown items={schools}/>
        <Calendar />
        <SearchBar />
      </div>
    </div>
  )
  
}

export default Sidebar;
