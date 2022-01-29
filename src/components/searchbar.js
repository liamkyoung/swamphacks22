import React from 'react';
import SearchIcon from '@heroicons/react/solid/SearchIcon'

function searchDB () {
    return "Searching..."
}

function SearchBar () {
  return (
    <div className="pt-2 relative mx-auto text-gray-600">
    <form className='flex items-center justify-center' onSubmit={searchDB}>
    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      type="search" name="search" placeholder="Search" />
        <button type="submit" className="mt-5 mr-4 h-12 w-12">
            <SearchIcon />
        </button>
    </form>
  </div>
  );
}

export default SearchBar;
