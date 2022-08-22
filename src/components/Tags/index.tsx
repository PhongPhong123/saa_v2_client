import { AiFillAlipayCircle } from 'react-icons/ai';
import { useFetchArray } from "../../hooks";
import TagBox from "../TagBox";

const locations = [
    {
        id: '1',
        name: "doctor",
        icon: AiFillAlipayCircle
    },
    {
        id: '2',
        name: "doctor",
        icon: AiFillAlipayCircle
    },
    {
        id: '3',
        name: "doctor",
        icon: AiFillAlipayCircle
    },
    {
        id: '4',
        name: "doctor",
        icon: AiFillAlipayCircle
    },
    {
        id: '5',
        name: "doctor",
        icon: AiFillAlipayCircle
    },
    {
        id: '6',
        name: "doctor",
        icon: AiFillAlipayCircle
    },
]

function Tags() {
    type tagResponse = { id: string, name: string }

    const { state: tags } = useFetchArray<tagResponse>(`${process.env.REACT_APP_SERVER_HOST}/tags/`)

    return (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 md:px-15 lg:px-20">
            {tags.map(location => <TagBox key={location.id} id={location.id} name={location.name} Icon={AiFillAlipayCircle}/>)}
        </div>
    )
}

export default Tags;