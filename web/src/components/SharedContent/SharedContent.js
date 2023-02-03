import Nieuws from 'src/components/Nieuws/Nieuws'
import Upcoming from 'src/components/Upcoming/Upcoming'
const SharedContent = () => {
  return (
    <div className={`flex flex-col lg:flex-row`}>
      <Upcoming />
      <Nieuws />
    </div>
  )
}

export default SharedContent
