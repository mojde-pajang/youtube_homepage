import { ElementType } from "react"
import { twMerge } from "tailwind-merge";
import buttonStyles from "../../../components/Button/styles";



type Props = {
  IconOrImgURL: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean
}

function LargeSectionItem({ IconOrImgURL, title, url, isActive = false }: Props) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), ` flex-row w-full gap-3 rounded-lg px-3 justify-start ${isActive ? " font-bold bg-primary-100   " : undefined}} `)}>
      {(typeof IconOrImgURL === "string") ? (
        <img src={IconOrImgURL} alt="" className="w-6 h-6 rounded-full" />

      ) : (
        <IconOrImgURL className={` w-5 h-5 ${isActive ? " fill-black " : undefined}`} />
      )}
      <span className="text-sm ">{title}</span>
    </a>
  )
}

export default LargeSectionItem