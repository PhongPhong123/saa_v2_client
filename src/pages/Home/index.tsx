import { useContext } from 'react';
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";
import Tags from "../../components/Tags";
import DestinationsSlide from "../../components/DestinationsSlide";
import PropertySequenceUserChoose from "../../components/PropertySequenceUserChoose";
import Destinations from "../../components/Destinations";

function Home() {
    const appointmentPropertyContext = useContext(AppointmentPropertyContext);

    function RenderOption() {
        if (!appointmentPropertyContext.tag.name)
            return <Tags/>
        else if (!appointmentPropertyContext.destination.name)
            return <Destinations/>
    }

    return <div>
        <DestinationsSlide/>
        <div>
            <PropertySequenceUserChoose/>
            {RenderOption()}
        </div>
    </div>
}

export default Home