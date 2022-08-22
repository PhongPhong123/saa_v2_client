import { useContext, useRef, useState } from 'react';
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";
import Tags from "../../components/Tags";
import DestinationsSlide from "../../components/DestinationsSlide";
import PropertySequenceUserChoose from "../../components/PropertySequenceUserChoose";
import Destinations from "../../components/Destinations";
import Calendar, { IForwardRef as IForwardCalendarRef } from "../../components/Calendar";
import Button, {EComponentType} from "../../components/Button";

function Home() {
    const [appointments, setAppointments] = useState([])

    const appointmentPropertyContext = useContext(AppointmentPropertyContext);
    const calendarRef = useRef<IForwardCalendarRef>({value: () => ""});

    async function submitSearch() {
        const calendarValue = calendarRef.current.value();
        appointmentPropertyContext.setDate(calendarValue);
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/appointments/features/searchs?tag_id=${appointmentPropertyContext.tag.id}&destination=${appointmentPropertyContext.destination.codename}&date=${calendarValue}`);
            const responseJSON = await response.json();
            setAppointments(responseJSON)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(appointments);

    function RenderOption() {
        if (!appointmentPropertyContext.tag.name)
            return <Tags/>
        else if (!appointmentPropertyContext.destination.name)
            return <Destinations/>
        else if (!appointmentPropertyContext.date)
            return <div className="flex flex-col gap-3">
                <Calendar ref={calendarRef}/>
                <div className="flex justify-center">
                    <Button type={EComponentType.PRIMARY} content="Search" onClick={submitSearch}/>
                </div>
            </div>
    }

    return <div>
        <div className="py-5 md:py-10">
            <DestinationsSlide/>
        </div>
        <div className="flex flex-col gap-y-7">
            <div>
                <PropertySequenceUserChoose/>
            </div>
            <div>
                {RenderOption()}
            </div>
        </div>
    </div>
}

export default Home