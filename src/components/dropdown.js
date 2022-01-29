import { useState } from 'react'
import { Listbox } from '@headlessui/react'

function Dropdown ({ items }) {
  const [selectedItem, setSelectedItem] = useState(items[0])

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      <Listbox.Button>{selectedItem.name}</Listbox.Button>
      <Listbox.Options>
        {items.map((item) => (
          <Listbox.Option
            key={item.id}
            value={item.name}
            disabled={item.unavailable}
            className={'text-xl'}
          >
            {item.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default Dropdown