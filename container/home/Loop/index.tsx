import classnames from 'classnames'
import { Hastag } from '@components/ui'
import Link from 'next/link'
import s from './loop.module.css'

const Loop = () => {
  return (
    <section className="block">
      {/* animation slide to top */}
      <div className={s.wrap}>
        <article className="max-w-full py-12">
          <div className={s.item}>
            <div className="w_change_transform">
              <div className={classnames(s.mb_2vh, 'font-mono text-sm relative w-full font-normal')}>
                {/* A year ago by Khoa Le and Megan Anderson - 3 minutes read */}
                
              </div>
              <h2>
                <Link href="/">
                  <a
                    className={classnames(
                      'text-3xl font-bold font-eng pt-2 global-underline cursor-pointer',
                      s.max_w_1000,
                      s.mb_2vh
                    )}
                  >
                    {/* Now we’re getting somewhere */}
                    Comming Soon
                  </a>
                </Link>
              </h2>
              <p className={classnames(s.max_w_600, 'text-sm font-eng pt-8 leading-8')}>
                Quae quo sunt excelsiores, eo dant clariora indicia naturae. Sed haec quidem liberius ab eo dicuntur et
                saepius. Et ille ridens video, inquit, quid agas tum ille timide vel potius verecunde.
              </p>
              <div className="flex">
                <Hastag title="story" />
                <Hastag title="coding" />
                <Hastag title="creative" />
                <Hastag title="nonsense" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Loop
