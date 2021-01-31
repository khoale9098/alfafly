import PinnedContainer from '@components/common/pinned_container'
import classnames from 'classnames'
import PinnedPost from '@components/common/pinned_post'
import Link from 'next/link'

const Pinned = () => {
  return (
    <section className="flex">
      <div className="w-3/12 flex ">
        <PinnedContainer className="global-special" title="Annoucement" color="primary">
          <PinnedPost title="Xin chào mình là Khoa?" />
        </PinnedContainer>
      </div>
      <div className="w-9/12 ml-8">
        <PinnedContainer className="global-special" title="Don't miss it" color="secondary">
          <PinnedPost title="Xin chào mình là Khoa?" />
          <PinnedPost title="Xin chào mình là Khoa?" />
          <PinnedPost title="Xin chào mình là Khoa?" />
        </PinnedContainer>
      </div>
    </section>
  )
}

export default Pinned
