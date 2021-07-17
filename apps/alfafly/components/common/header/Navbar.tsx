import { useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import Logo from '@components/common/logo'
import ButtonGlobal from '@components/ui/button'
import HamburgerIcon from '@components/common/icons/hamburger'
import NavItem from '@components/common/nav_item'
import s from './Navbar.module.css'

const Navbar = () => {
  const [isOpenNav, setOpenNav] = useState(false)
  const menu = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About Me',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/',
    },
  ]

  return (
    <header className="box-border w-full block">
      <div className={s.wrap}>
        <Logo className={s.logo} />
        <div className={s.nav}>
          <HamburgerIcon isOpen={isOpenNav} setOpen={setOpenNav} />
          <nav className={classnames(!isOpenNav ? '-left-full' : 'left-0')}>
            <ul>
              {menu.map(({ href, name }) => (
                <NavItem name={name} href={href} key={name} />
              ))}
            </ul>
            <ul>
              <li role="button">
                <Link href="/">
                  <a>
                    <ButtonGlobal />
                  </a>
                </Link>
              </li>
              <li>
                <a>Sign in</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
