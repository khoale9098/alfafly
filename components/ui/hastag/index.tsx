import { FC, CSSProperties, HTMLAttributes } from 'react'
import classnames from 'classnames'

interface HastagProps extends HTMLAttributes<HTMLSpanElement> {
  title: string
  className?: string
  style?: CSSProperties
}

const Hastag: FC<HastagProps> = ({ title, className, style }) => {
  const tagStyle = { ...style }
  return (
    <span style={tagStyle} className={classnames(className, 'font-mono text-xs px-1 m-0 relative')}>{`#${title}`}</span>
  )
}
export default Hastag
