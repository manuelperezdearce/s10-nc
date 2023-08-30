import InfoProfileRestaurant from '../../components/Sections/InfoProfileRestaurant';
import FiltersSearch from '../../components/Sections/FiltersSearch';


export default function RestaurantID() {
    return (
        <div className='py-20 lg:py-32 px-5 md:mt-5 flex flex-col gap-y-14 max-w-7xl xl:mx-auto text-black'>
            <InfoProfileRestaurant/>
            <FiltersSearch/>
        </div>
    )
}
