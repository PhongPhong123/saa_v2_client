import TagButton from "../../../components/TagButton";
import './styles.css';
import Button, { EComponentType as EButtonType} from "../../../components/Button";

const tags = [
    {
        id: 1,
        tag_name: "health check",
        tag_code: "health_check"
    },
    {
        id: 2,
        tag_name: "massage",
        tag_code: "massage"
    },
    {
        id: 3,
        tag_name: "advise",
        tag_code: "advise"
    },
    {
        id: 4,
        tag_name: "something",
        tag_code: "something"
    },
    {
        id: 5,
        tag_name: "anything",
        tag_code: "anything"
    },
    {
        id: 6,
        tag_name: "onething",
        tag_code: "onething"
    },
    {
        id: 7,
        tag_name: "twothing",
        tag_code: "twothing"
    }
]

function Navbar() {
    return (
        <header className="container mx-auto py-2 px-2 flex items-center justify-between gap-x-5">
            <div id="tag-container" className="flex gap-x-5 overflow-x-scroll py-3 px-2">
                {tags.map(tag => <TagButton key={tag.id} tagName={tag.tag_name} tagCode={tag.tag_code}/>)}
            </div>
            <div className="flex gap-x-5 min-w-fit">
                <Button name="Sign In" type={EButtonType.PRIMARY}/>
                <Button name="Sign Up" type={EButtonType.PRIMARY}/>
            </div>
        </header>
    )
}

export default Navbar;