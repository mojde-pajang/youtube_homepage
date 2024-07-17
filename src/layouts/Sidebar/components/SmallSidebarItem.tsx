import { ElementType } from "react"
import { twMerge } from "tailwind-merge";
import buttonStyles from "../../../components/Button/styles";

type Props = {
  Icon: ElementType;
  title: string;
  url: string;
}

function SmallSidebarItem({ Icon, title, url }: Props) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), " rounded-lg h-max w-auto flex-col gap-2 px-1 py-3 ml-1")}>
      <Icon className=" w-5 h-5" />
      <span className="text-[10px] ">{title}</span>
    </a>
  )
}

export default SmallSidebarItem