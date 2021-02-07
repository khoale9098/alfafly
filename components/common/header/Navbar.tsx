import Link from 'next/link'
import ButtonGlobal from '@components/ui/button'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className="box-border w-full block">
      <div className={s.wrap}>
        <div className={s.logo}>
          <h1>
            <Link href="/">
              <a>
                {/* <img src="https://renge.fueko.net/content/images/2020/07/renge.svg" alt="" /> */}
                <h1 className={s.alfaflyz}>Alfaflyz</h1>
              </a>
            </Link>
          </h1>
        </div>
        <div className={s.nav}>
          <nav>
            <ul>
              <li>
                <Link href="/link">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/link">
                  <a>About Me</a>
                </Link>
              </li>
              <li>
                <Link href="/link">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/link">
                  <a>Let's learn</a>
                </Link>
              </li>
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
