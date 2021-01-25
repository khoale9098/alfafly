import CatagoryContainer from '@components/common/catagory_container'
import s from './pinned.module.css'

const Pinned = () => {
  return (
    <section className="flex">
      <div className="w-3/12 flex ">
        <CatagoryContainer>dsd</CatagoryContainer>
      </div>
      <div className="w-9/12 ml-8">
        <CatagoryContainer>dsd</CatagoryContainer>
      </div>
    </section>
  )
}

export default Pinned
