import { HomeIcon, BoltIcon, ServerStackIcon, VideoCameraIcon } from "@heroicons/react/24/outline"
import SmallSidebarItem from "./components/SmallSidebarItem"

function Sidebar() {
  return (
    <>
      <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden`}>
        <SmallSidebarItem Icon={HomeIcon} url="/" title="Home" />
        <SmallSidebarItem Icon={BoltIcon} url="/" title="Shorts" />
        <SmallSidebarItem Icon={ServerStackIcon} url="/" title="Subscription" />
        <SmallSidebarItem Icon={VideoCameraIcon} url="/" title="You" />
      </aside>
      <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 lg:flex flex-col ml-1 hidden`}>

      </aside>
    </>

  )
}

export default Sidebar