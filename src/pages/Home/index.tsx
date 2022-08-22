import { useContext, useRef } from 'react';
import { AppointmentPropertyContext } from "../../contexts/appointmentProperty";
import { SearchingContext } from "../../contexts/searching";
import Tags from "../../components/Tags";
import DestinationsSlide from "../../components/DestinationsSlide";
import PropertySequenceUserChoose from "../../components/PropertySequenceUserChoose";
import Destinations from "../../components/Destinations";
import Calendar, { IForwardRef as IForwardCalendarRef } from "../../components/Calendar";
import Button, {EComponentType} from "../../components/Button";
import SearchResult from "../../components/SearchResult";

function Home() {
    const searchingContext = useContext(SearchingContext);
    const appointmentPropertyContext = useContext(AppointmentPropertyContext);
    const calendarRef = useRef<IForwardCalendarRef>({value: () => ""});

    async function submitSearch() {
        const calendarValue = calendarRef.current.value();
        appointmentPropertyContext.setDate(calendarValue);
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/appointments/features/searchs?tag_id=${appointmentPropertyContext.tag.id}&destination=${appointmentPropertyContext.destination.codename}&date=${calendarValue}`);
            const responseJSON = await response.json();
            searchingContext.setAppointments(responseJSON);
        } catch (error) {
            console.log(error);
        }
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
        if (appointmentPropertyContext.tag.name && appointmentPropertyContext.destination.name && appointmentPropertyContext.date)
            return <SearchResult data={searchingContext.appointments}/>
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