import { useState } from 'react'
import { Spin as Hamburger } from './Spin'

const HamburgerIcon = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="block lg:hidden">
      <Hamburger rounded hideOutline toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

export default HamburgerIcon
