import { MainProfile } from "./MainProfile"
import { Myknowledge } from "./MyKnowledge"

const Main = () => {
    return (
        <div className="flex flex-col w-auto gap-2 px-2 items-center">
            <MainProfile />
            <Myknowledge />
        </div>


    )
}

export { Main }