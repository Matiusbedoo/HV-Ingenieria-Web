import { Education } from "./Education"
import { MainProfile } from "./MainProfile"
import { Myknowledge } from "./MyKnowledge"
import { SectionDescription } from "./sectionDescription"

const Main = () => {
    return (
        <div className="flex flex-col w-auto gap-2 px-2 items-center">
            <MainProfile />
            <Myknowledge />
            <Education />
        </div>


    )
}

export { Main }