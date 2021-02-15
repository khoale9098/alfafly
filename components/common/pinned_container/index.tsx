import { FC, CSSProperties } from 'react'
import classnames from 'classnames'

import s from './pinned_container.module.css'

type styled = {
  primary: string
  secondary: string
}

const styledBorder = {
  primary: 'border-primary',
  secondary: 'border-secondary',
} as styled

const styledBackground = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
} as styled

const PinnedContainer: FC<{
  color: 'primary' | 'secondary'
  title: string
  className?: string
  style?: CSSProperties

}> = ({ color, title, children, className = '' }) => {
  
  return (
    <div className={classnames(s.pinned, s.special, styledBorder[color], className)}>
      <h2 className={styledBackground[color]}>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  )
}

export default PinnedContainer
