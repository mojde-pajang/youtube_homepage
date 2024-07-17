import { ElementType } from "react"
import { twMerge } from "tailwind-merge";
import buttonStyles from "../../../components/Button/styles";



type Props = {
  Icon: ElementType;
  title: string;
  url: string;
}

function LargeSectionItem({ Icon, title, url }: Props) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), " rounded-lg h-max w-auto gap-2 px-3 py-3 ml-1")}>
      <Icon className=" w-5 h-5" />
      <span className="text-sm ">{title}</span>
    </a>
  )
}

export default LargeSectionItem