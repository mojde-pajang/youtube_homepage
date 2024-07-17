import { HomeIcon, BoltIcon, ServerStackIcon, VideoCameraIcon } from "@heroicons/react/24/outline"
import SmallSidebarItem from "./components/SmallSidebarItem"
import LargeSection from "./components/LargeSection"
import LargeSectionItem from './components/LargeSectionItem';

function Sidebar() {
  return (
    <>
      <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden`}>
        <SmallSidebarItem Icon={HomeIcon} url="/" title="Home" />
        <SmallSidebarItem Icon={BoltIcon} url="/" title="Shorts" />
        <SmallSidebarItem Icon={ServerStackIcon} url="/" title="Subscription" />
        <SmallSidebarItem Icon={VideoCameraIcon} url="/" title="You" />
      </aside>
      <aside className={`sticky w-48 top-0 overflow-y-auto scrollbar-hidden px-2 pb-4 lg:flex flex-col ml-1 hidden`}>
        <LargeSection title="Subscriptions" visibleItemCount={2} >
          <LargeSectionItem Icon={HomeIcon} url="/" title="Home" isActive />
          <LargeSectionItem Icon={BoltIcon} url="/" title="Shorts" />
          <LargeSectionItem Icon={ServerStackIcon} url="/" title="Subscription" />
          <LargeSectionItem Icon={VideoCameraIcon} url="/" title="You" />
        </LargeSection>
      </aside>
    </>

  )
}

export default Sidebar