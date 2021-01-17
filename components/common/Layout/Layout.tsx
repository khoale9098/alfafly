import { FC } from 'react'
import s from './Layout.module.scss'

const Layout: FC = ({ children }) => {
  return <div className={s.layout}>{children}</div>
}

export default Layout
