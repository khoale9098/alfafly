import classnames from 'classnames'
import s from './Button.module.css'

const ButtonGlobal = () => {
  return <button className={classnames('bg-secondary px-4 py-3', s.global)}>Register for free</button>
}

export default ButtonGlobal
