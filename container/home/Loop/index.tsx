import classnames from 'classnames'
import s from './loop.module.css'

const Loop = () => {
  return (
    <section className="block">
      {/* animation slide to top */}
      <div className={s.wrap}>
        <article className="max-w-full py-12">
          <div className="relative max-w-full box-border "></div>
        </article>
      </div>
    </section>
  )
}

export default Loop
