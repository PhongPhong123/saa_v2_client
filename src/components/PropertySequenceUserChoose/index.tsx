import { useContext } from 'react';
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";

function PropertySequenceUserChoose() {
    const appointmentPropertyContext = useContext(AppointmentPropertyContext);

    if (!appointmentPropertyContext.tag.name)
        return (
            <div className="text-center text-2xl lg:text-4xl font-semibold text-blur-gray">
                Choose a service you want!
            </div>
        )

    return (
        <div className="text-center text-2xl lg:text-4xl font-semibold text-blur-gray">
            Book a {appointmentPropertyContext.tag.name} {appointmentPropertyContext.destination.name && `from ${appointmentPropertyContext.destination.name}`}
        </div>
    )
}

export default PropertySequenceUserChoose;