import { useContext } from 'react';
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";
import Tags from "../../components/Tags";
import DestinationsSlide from "../../components/DestinationsSlide";
import PropertySequenceUserChoose from "../../components/PropertySequenceUserChoose";
import Destinations from "../../components/Destinations";

function Home() {
    const appointmentPropertyContext = useContext(AppointmentPropertyContext);

    return <div>
        <DestinationsSlide/>
        <div>
            <PropertySequenceUserChoose/>
            {!appointmentPropertyContext.tag ? <Tags/> : !appointmentPropertyContext.destination ? <Destinations/> : null}
        </div>
    </div>
}

export default Home