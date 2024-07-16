import { formatTime } from "../../lib/fromatTime";
import { formatTimeAgo } from '../../lib/formatTimeAgo';

type Props = {
  id: string;
  title: string;
  channel: {
    name: string;
    id: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })


function VideoItem({ id, title, channel, views, postedAt, duration, thumbnailUrl, videoUrl }: Props) {
  console.log({ views, postedAt, videoUrl })
  return (
    <div className=" grid gap-2" >
      <a href={`/watch?v=${id}`} className=" relative">
        <img src={thumbnailUrl} alt={title} className=" rounded-xl object-cover w-full h-full " />
        <span className=" bg-primary-900 text-white absolute right-3 bottom-3 p-1 rounded-lg text-xs">{formatTime(duration)}</span>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} >
          <img src={channel.profileUrl} alt={channel.name}
            className=" w-10 h-10 rounded-full flex-shrink-1 " />
        </a>
        <div className=" flex flex-col gap-1">
          <a href={`/watch?v=${id}`} className=" font-bold">{title}</a>
          <a href={`/@${channel.id}`} className=" text-primary-500 text-sm">{channel.name}</a>
          <div className=" text-primary-500 text-sm">
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>

        </div>

      </div>

    </div>
  )
}

export default VideoItem