import { formatTime } from "../../lib/fromatTime";
import { formatTimeAgo } from '../../lib/formatTimeAgo';
import { useEffect, useRef, useState } from "react";

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
  const [isVidePlay, setIsVideoPlay] = useState(false);
  const videRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videRef.current == null) return;

    if (isVidePlay) {
      videRef.current.currentTime = 0;
      videRef.current.play();
    } else {
      videRef.current.pause();
    }
  }, [isVidePlay])

  return (
    <div className=" grid gap-2" >
      <a href={`/watch?v=${id}`} className=" relative "
        onMouseEnter={() => setIsVideoPlay(true)}
        onMouseOut={() => setIsVideoPlay(false)}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${isVidePlay ? "rounded-none" : "rounded-xl"
            }`} />
        <span className=" bg-primary-900 text-white absolute right-3 bottom-3 p-1 rounded-lg text-xs">{formatTime(duration)}</span>
        <video ref={videRef} src={videoUrl} muted playsInline
          className={`absolute  object-cover inset-0 top-0 left-0 w-full h-full transition-opacity delay-200
           ${isVidePlay ? "opacity-100" : "opacity-0"}`}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0" >
          <img src={channel.profileUrl} alt={channel.name}
            className=" w-10 h-10 rounded-full" />
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