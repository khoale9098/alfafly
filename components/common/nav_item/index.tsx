import { FC } from 'react'
import Link from 'next/link'

const NavItem: FC<{ name: string; href: string }> = ({ name, href }) => {
  return (
    <li>
      <Link href="/">
        <a>{name}</a>
      </Link>
    </li>
  )
}

export default NavItem
