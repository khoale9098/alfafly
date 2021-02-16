import { useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import ButtonGlobal from '@components/ui/button'
import HamburgerIcon from '@components/common/hamburger_icon'
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
        <div className={s.logo}>
          <h1>
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </h1>
        </div>
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
                <Link href="/">
                  <a>Sign in</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
