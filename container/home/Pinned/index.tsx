import PinnedContainer from '@components/common/pinned_container'
import PinnedPost from '@components/common/pinned_post'

const Pinned = () => {
  return (
    <section className="flex m-lg:flex-col flex-row">
      <div className="w-3/12 flex m-lg:w-full">
        <PinnedContainer title="Annoucement" color="primary">
          <PinnedPost title="Xin chào mình là Khoa?" />
        </PinnedContainer>
        
      </div>
      {/* <div className="w-9/12 ml-8 m-lg:w-full m-lg:ml-0">
        <PinnedContainer title="Don't miss it" color="secondary">
          <PinnedPost
            title="Design is a mirror, reflecting the culture"
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
      </div> */}
    </section>
  )
}

export default Pinned
