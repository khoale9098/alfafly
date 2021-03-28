import { FC, Dispatch, SetStateAction } from 'react'
import { Spin as Hamburger } from './Spin'

const HamburgerIcon: FC<{ isOpen: boolean; setOpen: Dispatch<SetStateAction<boolean>>}> = ({ isOpen, setOpen }) => (
  <div className="block lg:hidden pointer-events-none cursor-pointer m-0 p-0 relative">
    <Hamburger rounded hideOutline toggled={isOpen} toggle={setOpen} />
  </div>
)
export default HamburgerIcon
