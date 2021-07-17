import { FC } from 'react'
import Navbar from '@components/common/header'
import Footer from '@components/common/footer'
import s from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <div className={s.container}>
      <Navbar />
      <main className={s.content}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
