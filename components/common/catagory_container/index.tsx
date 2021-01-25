import { FC } from 'react'
import classnames from 'classnames'
import s from './catagory.module.css'

const CatagoryContainer: FC<{
  color: string | 'yellow' | 'green'
  title: string
}> = ({ color, title }) => {
  return (
    <div className={s.pinned}>
      <h2>
        <span>Announcements</span>
      </h2>
      <div>1</div>
    </div>
  )
}

export default CatagoryContainer
