import { forwardRef, useRef } from 'react'
import cn from 'classnames'
import s from './Button.module.css'

const ButtonGlobal = () => {
  return <button className={cn('bg-secondary px-4 py-3 focus:outline-none', s.global)}>Register for free</button>
}

export default ButtonGlobal
