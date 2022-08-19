import {useFetchArray} from "../../hooks";
import Destination from "../Destination";

function Destinations() {
    type destinationResponse = {name: string, codename: string}

    const {state: destinations} = useFetchArray<destinationResponse>(`${process.env.REACT_APP_SERVER_HOST}/locations/properties/name_codename`);

    return (
        <div className="mx-auto flex flex-col bg-opa w-2/3 h-52 lg:w-2/6 lg:h-96 rounded-md overflow-y-scroll">
            {destinations.map(destination => <Destination key={destination.codename} name={destination.name}/>)}
        </div>
    )
}

export default Destinations;