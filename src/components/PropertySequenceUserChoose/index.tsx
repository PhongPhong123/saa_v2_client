import { useContext } from 'react';
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";

function PropertySequenceUserChoose() {
    const appointmentPropertyContext = useContext(AppointmentPropertyContext);

    return (
        <div className="text-center text-2xl lg:text-4xl font-semibold">
            Book a {appointmentPropertyContext.tag} from {}, {}.
        </div>
    )
}

export default PropertySequenceUserChoose;