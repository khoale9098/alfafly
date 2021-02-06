import Pinned from '@container/home/Pinned'
import Loop from '@container/home/Loop'

const HomeUI = () => {
  return (
    <div>
      <h1
        className="font-bold h-full flex flex-col items-center text-center justify-center text-7xl"
        style={{ height: '50vh' }}
      >
        Comming Soon
        <br className="py-12" />
        <span className="py-12"> 近日公開</span>
      </h1>
      {/* <Pinned />
      <Loop /> */}
    </div>
  )
}

export default HomeUI
