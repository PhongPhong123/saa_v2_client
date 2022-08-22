import AppointmentSearchResult from "../AppointmentSearchResult";

interface IProps {
    data: any[]
}

function SearchResult({ data }: IProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {data.map(item => <AppointmentSearchResult key={item.id} id={item.id} title={item.title} content={item.content} held_on_time={item.held_on_time} start_time={item.start_time} end_time={item.end_time} limit={item.limit} subscribed={item.subscribed}/>)}
        </div>
    )
}

export default SearchResult;