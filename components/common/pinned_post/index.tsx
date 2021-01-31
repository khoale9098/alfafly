import { FC } from 'react'
import Link from 'next/link'

const PinnedPost: FC<{
  title: string
  description?: string
  actor?: string
  hastag?: string
}> = ({ title, description, actor, hastag }) => {
  return (
    <article>
      <h3>
        <Link href="/">
          <a className="global-underline">Xin chào, mình là Khoa?</a>
        </Link>
      </h3>
      <div className="meta">
        <a>Khoa Le and others</a>
      </div>
    </article>
  )
}

export default PinnedPost
