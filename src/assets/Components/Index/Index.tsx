import CateguryHeader from '../CateguryHeader/CateguryHeader'
import PcIndex from '../PcIndex/PcIndex'
import RestaurantCategories from '../RestaurantCategories/RestaurantCategories'

export default function Index() {
  return (
    <div className='flex flex-col'>
        <PcIndex/>
        <CateguryHeader/>
        <RestaurantCategories/> 
    </div>
  )
}
