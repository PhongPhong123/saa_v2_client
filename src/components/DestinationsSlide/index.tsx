import {useEffect, useState } from 'react';
import DestinationSlideItem from "../DestinationSlideItem";
import {Destination as DestinationDto} from "../../dtos/location.dto";
import Button, {EComponentType} from "../Button";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import './styles.css';

function DestinationsSlide() {
    const [destinations, setDestinations] = useState<Array<DestinationDto> | []>([]);

    useEffect(() => {
        async function fetchDestinations() {
            const api = `${process.env.REACT_APP_SERVER_HOST}/locations/central`;
            const response = await fetch(api);
            return await response.json();
        }
        fetchDestinations().then(data => setDestinations(data));
    }, [])

    return (
        <div className="relative">
            <span className="lg:hidden absolute top-1/2 -left-1 md:-left-4 -translate-y-1/2 z-50">
                <Button type={EComponentType.SECONDARY} Icon={IoIosArrowBack}/>
            </span>
            <div id="destinations" className="w-full flex overflow-x-scroll gap-x-5 justify-between">
                {destinations.map(destination => <DestinationSlideItem key={destination.code} name={destination.name} codename={destination.codename} image={destination.image}/>)}
            </div>
            <span className="lg:hidden absolute top-1/2 -right-1 md:-right-4 -translate-y-1/2 z-50">
                <Button type={EComponentType.SECONDARY} Icon={IoIosArrowForward}/>
            </span>
        </div>
    )
}

export default DestinationsSlide;