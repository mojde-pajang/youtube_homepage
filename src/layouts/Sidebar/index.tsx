import {
  HomeIcon,
  BoltIcon,
  ServerStackIcon,
  VideoCameraIcon,
  ClockIcon,
  HandThumbUpIcon,
  QueueListIcon,
  PlayCircleIcon,
  ArrowPathIcon,
  UserCircleIcon,
  FireIcon,
  MusicalNoteIcon,
  TvIcon,
  SignalIcon,
  PuzzlePieceIcon,
  NewspaperIcon,
  TrophyIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline"
import SmallSidebarItem from "./components/SmallSidebarItem"
import LargeSection from "./components/LargeSection"
import LargeSectionItem from './components/LargeSectionItem';
import { playlists, subscriptions } from "../../lib/data";
import { useSidebarContext } from "../../contexts/SidebarContext";
import HeaderFirstSection from "../PageHeader/components/HeaderFirstSection";

function Sidebar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext()
  return (
    <>
      <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col ml-1 
      ${isLargeOpen ? " lg:hidden" : " lg:flex"}`}>
        <SmallSidebarItem Icon={HomeIcon} url="/" title="Home" />
        <SmallSidebarItem Icon={BoltIcon} url="/" title="Shorts" />
        <SmallSidebarItem Icon={ServerStackIcon} url="/" title="Subscription" />
        <SmallSidebarItem Icon={VideoCameraIcon} url="/" title="You" />
      </aside>

      {
        isSmallOpen && <div onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-primary-700 opacity-50 "
        />
      }
      <aside className={`lg:sticky w-48 absolute top-0 overflow-y-auto scrollbar-hidden px-2 pb-4   flex-col ml-1 
      ${isLargeOpen ? " lg:flex" : " lg:hidden"} ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}>
        <div className="lg:hidden sticky top-0 bg-white px-1 pt-4">
          <HeaderFirstSection />
        </div>

        <LargeSection >
          <LargeSectionItem IconOrImgURL={HomeIcon} url="/" title="Home" isActive />
          <LargeSectionItem IconOrImgURL={BoltIcon} url="/" title="Shorts" />
          <LargeSectionItem IconOrImgURL={ServerStackIcon} url="/" title="Subscription" />
          <LargeSectionItem IconOrImgURL={VideoCameraIcon} url="/" title="You" />
        </LargeSection>
        <hr className=" py-2 mt-2" />
        <LargeSection title="You" visibleItemCount={5}>
          <LargeSectionItem IconOrImgURL={UserCircleIcon} url="/your-channel" title="Your channel" />
          <LargeSectionItem IconOrImgURL={ArrowPathIcon} url="/history" title="History" />
          {playlists.map(playlist => (
            <LargeSectionItem
              key={playlist.id}
              IconOrImgURL={QueueListIcon}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
          <LargeSectionItem IconOrImgURL={PlayCircleIcon} url="/your-videos" title="Your videos" />
          <LargeSectionItem IconOrImgURL={ClockIcon} url="/watch-later" title="Watch later" />
          <LargeSectionItem IconOrImgURL={HandThumbUpIcon} url="/" title="Liked videos" />
        </LargeSection>
        <hr className=" py-2 mt-2" />
        <LargeSection title="Subscriptions" >
          {
            subscriptions.map(sub => (
              <LargeSectionItem key={sub.id} IconOrImgURL={sub.imgUrl} url={`/@${sub.id}`} title={sub.channelName} />
            ))
          }
        </LargeSection>
        <hr className=" py-2 mt-2" />
        <LargeSection title="Explore" >
          <LargeSectionItem IconOrImgURL={FireIcon} url="/" title="Trending" />
          <LargeSectionItem IconOrImgURL={MusicalNoteIcon} url="/" title="Music" />
          <LargeSectionItem IconOrImgURL={TvIcon} url="/" title="Movies & TV" />
          <LargeSectionItem IconOrImgURL={SignalIcon} url="/" title="Live" />
          <LargeSectionItem IconOrImgURL={PuzzlePieceIcon} url="/" title="Gaming" />
          <LargeSectionItem IconOrImgURL={NewspaperIcon} url="/" title="News" />
          <LargeSectionItem IconOrImgURL={TrophyIcon} url="/" title="Sports" />
          <LargeSectionItem IconOrImgURL={AcademicCapIcon} url="/" title="Learning" />
        </LargeSection>

      </aside>
    </>

  )
}

export default Sidebar