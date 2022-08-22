import { useContext, useRef } from 'react';
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";
import Tags from "../../components/Tags";
import DestinationsSlide from "../../components/DestinationsSlide";
import PropertySequenceUserChoose from "../../components/PropertySequenceUserChoose";
import Destinations from "../../components/Destinations";
import Calendar, { IForwardRef as IForwardCalendarRef } from "../../components/Calendar";
import Button, {EComponentType} from "../../components/Button";

function Home() {
    const appointmentPropertyContext = useContext(AppointmentPropertyContext);
    const calendarRef = useRef<IForwardCalendarRef>({value: () => ""});

    function submitSearch() {
        const calendarValue = calendarRef.current.value();
        appointmentPropertyContext.setDate(calendarValue);
    }

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