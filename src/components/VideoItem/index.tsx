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
    <div className=" grid" >
      <a href={`/watch?v=${id}`}>
        <img src={thumbnailUrl} alt={title} />
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} >
          <img src={channel.profileUrl} alt="" />
        </a>
        <div>
          <a href={`/watch?v=${id}`}>{title}</a>
        </div>
      </div>

    </div>
  )
}

export default VideoItem