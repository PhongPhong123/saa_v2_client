import { useContext } from 'react';
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";

function PropertySequenceUserChoose() {
    const appointmentPropertyContext = useContext(AppointmentPropertyContext);
    
    if (!appointmentPropertyContext.tag)
        return (
            <div className="text-center text-2xl lg:text-4xl font-semibold text-blur-gray">
                Choose a service you want!
            </div>
        )

    return (
        <div className="text-center text-2xl lg:text-4xl font-semibold text-blur-gray">
            Book a {appointmentPropertyContext.tag} {appointmentPropertyContext.destination && `from ${appointmentPropertyContext.destination}`}
        </div>
    )
}

export default PropertySequenceUserChoose;