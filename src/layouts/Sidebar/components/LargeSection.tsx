import { Children, ReactNode, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { Button } from '../../../components';

type Props = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
}

function LargeSection({ children, title, visibleItemCount = Number.POSITIVE_INFINITY }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = Children.toArray(children);
  const showExpandButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUpIcon : ChevronDownIcon;
  const visibleChildren = isExpanded ?
    childrenArray :
    childrenArray.slice(0, visibleItemCount)

  return (
    <div className=' w-full '>
      {title && (<p className=' text-sm font-bold px-3 mb-2'>{title}</p>)}
      {visibleChildren}
      {showExpandButton && (
        <Button variant={"ghost"} className=' flex-row w-full gap-3 rounded-lg px-3 justify-start'
          onClick={() => (setIsExpanded(prev => !prev))}>
          <ButtonIcon className='w-5 h-5' />
          <span className=' text-sm'>
            {isExpanded ? "Show less" : "Show more"}
          </span>
        </Button>
      )}
    </div>
  )
}

export default LargeSection