import React from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function dropdownitems ({ items }) {
    return (
        items.map((name) => {
            console.log(name)
            return (
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-2 py-2 text-sm text-center'
                    )}
                    >
                    {name}
                    </a>
                )}
                </Menu.Item>
            )
        })
    )
    
}

export default dropdownitems;
