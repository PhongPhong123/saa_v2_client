import { AiFillAlipayCircle } from 'react-icons/ai';
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
    return (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 md:px-15 lg:px-20">
            {locations.map(location => <TagBox key={location.id} id={location.id} name={location.name} Icon={location.icon}/>)}
        </div>
    )
}

export default Tags;