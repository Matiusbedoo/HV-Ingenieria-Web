import { Main } from "@/components/Main"
import { SideBarIzq } from "@/components/SideBarIzq"
import { SocialNetworks } from "@/components/SocialNetworks"

const Index = () => {
  return (
    <div className="bg-hv-gray flex w-full h-full">
      <SideBarIzq/>
      <Main/>
      <SocialNetworks/>
    </div>
  )
}

export default Index