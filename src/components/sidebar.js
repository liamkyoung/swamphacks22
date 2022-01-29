import React from 'react';
import Dropdown from './dropdown';
import Image from 'next/image'
import LibraryIcon from '@heroicons/react/solid/LibraryIcon'
import SearchBar from './searchbar'
import Link from 'next/link'

function Sidebar () {
  const schools = [
      {
          id: 1,
          name: 'UF',
          unavailable: false
      },
      {
        id: 2,
        name: 'FSU',
        unavailable: false
      },
      {
        id: 3,
        name: 'UCF',
        unavailable: false
      },
      {
        id: 4,
        name: 'USF',
        unavailable: true
      }
  ]
  
  return (
      <div className='hidden md:flex flex-col bg-GRAY px-24 py-12 text-center justify-between'>
        <div className='text-BLUE hover:text-ORANGE hover:cursor-pointer'>
            <Link href="/">
                <div className='flex flex-col justify-center items-center'>
                    <LibraryIcon className='w-16 h-16' />
                    <h1 className='text-xl'>Campus</h1>
                </div>
            </Link>
        </div>
        
        <Dropdown items={schools}/>
        <h1>Weekly Calendar</h1>
        <h1>Filter</h1>
        <SearchBar />
      </div>
  )
}

export default Sidebar;
