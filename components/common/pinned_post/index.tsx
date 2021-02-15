import { FC } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import s from './pinned_post.module.css'

const PinnedPost: FC<{
  title: string
  img?: string
  description?: string
  actor?: string
  hastag?: string
}> = ({ title, description, actor, hastag, img }) => {
  return (
    <article>
      <div className={classnames(s.iimage)}>
        <div>
          <img className="w-full" src={img} alt="" />
        </div>
      </div>
      <h3 className="pt-4">
        <Link href="/">
          <a className="global-underline">{title}</a>
        </Link>
      </h3>
      {/* <div className="text-sm relative w-full font-mono">
        <a>Khoa Le and others</a>
      </div> */}
      <div className="m-0 flex relative w-full text-xs mt-2 font-mono">
        <a className="px-1">#creative</a>
        <a className="px-1">#nonsense</a>
        <a className="px-1">#ui/ux</a>
        <a className="px-1">#coding</a>
      </div>
    </article>
  )
}

export default PinnedPost
