import { FC } from 'react'
import Link from 'next/link'
import s from './Logo.module.css'

const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <h1>
        <Link href="/">
          <a>
            <h1 className={s.alfaflyz}>Alfaflyz</h1>
            {/* <img src="https://renge.fueko.net/content/images/2020/07/renge.svg" alt="" /> */}
          </a>
        </Link>
      </h1>
    </div>
  )
}

export default Logo
