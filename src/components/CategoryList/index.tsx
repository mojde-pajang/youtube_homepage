/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { memo, useRef, useState } from 'react';
import { Button } from '..';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type Props = {
  categoryList: string[];
  activeCategory: string;
  selectCategory: (category: string) => void
}

const TRANSLATE_AMOUNT = 200;

function CategoryList({ categoryList, activeCategory, selectCategory }: Props) {
  const [translate, setTranslate] = useState(300);
  const [showLeftArrow, SetShowLeftArrow] = useState(false);
  const [showRightArrow, SetShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMoveToLeft = () => {
    setTranslate(translate => {
      const newTranslate = translate - TRANSLATE_AMOUNT;
      if (newTranslate < 0) {
        return 0;
      }
      return newTranslate
    })
  }

  const handleMoveToRight = () => {
    setTranslate(translate => {
      if (containerRef.current == undefined)
        return translate;

      const newTranslate = translate + TRANSLATE_AMOUNT;
      const edge = containerRef.current?.scrollWidth;
      const visible = containerRef.current?.clientWidth;
      if (newTranslate + visible > edge) {
        return edge - visible;
      }

      return newTranslate;
    });
  }

  return (
    <div className=' overflow-x-hidden relative' ref={containerRef}>
      <div className='flex gap-3 w-[max-content] '
        style={{ "transform": `translateX(-${translate}px)` }}>
        {
          categoryList.map((category, index) => (
            <Button key={index} variant={activeCategory === category ? "primaryActive" : "primary"}
              size={'default'}
              className='px-2 py-1 '
              onClick={() => selectCategory(category)}
            >
              {category}
            </Button>
          ))
        }
      </div>
      {showLeftArrow && (
        <div className=' bg-gradient-to-r from-white from-50% to-transparent w-24 h-full absolute top-0 left-0 '>
          <Button variant={"ghost"} className=' h-full aspect-square w-auto'
            onClick={handleMoveToLeft}
          >
            <ChevronLeftIcon className="size-6 stroke-primary-700" />
          </Button>
        </div>
      )}
      {showRightArrow && (
        <div className=' bg-gradient-to-l from-white from-50%  w-24 h-full absolute top-0 right-0 flex justify-end '>
          <Button variant={"ghost"} className=' h-auto aspect-square w-auto'
            onClick={handleMoveToRight}
          >
            <ChevronRightIcon className="size-6 stroke-primary-700" />
          </Button>
        </div>
      )}


    </div>
  )
}

export default memo(CategoryList)