import PinnedContainer from '@components/common/pinned_container'
import PinnedPost from '@components/common/pinned_post'

const Pinned = () => {
  return (
    <section className="flex">
      <div className="w-3/12 flex ">
        <PinnedContainer title="Annoucement" color="primary">
          <PinnedPost title="Xin chào mình là Khoa?" />
        </PinnedContainer>
      </div>
      <div className="w-9/12 ml-8">
        <PinnedContainer title="Don't miss it" color="secondary">
          <PinnedPost
            title="Thử Rồi Thích: 5 Bước thay đổi thói quen không cần nhiều ý chí"
            img="https://vietcetera.com/uploads/images/02-feb-2021/20201210-travanconnong-01-2-536x356.jpg"
          />
          <PinnedPost
            title="Everything has beauty, but not everyone sees it"
            img="https://vietcetera.com/uploads/images/01-feb-2021/0201-trt-habit-feature-536x356-1612170125881.jpg"
          />
          <PinnedPost
            title="Everything has beauty, but not everyone sees it"
            img="https://vietcetera.com/uploads/images/01-feb-2021/0201-trt-habit-feature-536x356-1612170125881.jpg"
          />
        </PinnedContainer>
      </div>
    </section>
  )
}

export default Pinned
