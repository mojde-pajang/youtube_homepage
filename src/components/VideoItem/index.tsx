import { formatTime } from "../../lib/fromatTime";

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



function VideoItem({ id, title, channel, views, postedAt, duration, thumbnailUrl, videoUrl }: Props) {
  console.log({ title, channel, views, postedAt, duration, thumbnailUrl, videoUrl })
  return (
    <div className=" grid gap-2" >
      <a href={`/watch?v=${id}`} className=" relative">
        <img src={thumbnailUrl} alt={title} className=" rounded-xl object-cover w-full h-full " />
        <span className=" bg-primary-900 text-white absolute right-3 bottom-3 p-1 rounded-lg text-xs">{formatTime(duration)}</span>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} >
          <img src={channel.profileUrl} alt={channel.name}
            className=" w-10 h-10 rounded-full " />
        </a>
        <div>
          <a href={`/watch?v=${id}`}>{title}</a>
        </div>
      </div>

    </div>
  )
}

export default VideoItem