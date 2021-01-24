import { FC } from 'react'
import Navbar from '@components/common/Navbar'
import s from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <div className={s.container}>
      <Navbar />
      <div className={s.content}>{children}</div>
    </div>
  )
}

export default Layout
