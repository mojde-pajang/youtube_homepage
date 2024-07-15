/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';
import Button from '../Button';

type Props = {
  categoryList: string[];
  activeCategory: string;
  selectCategory: (category: string) => void
}



function CategoryList({ categoryList, activeCategory, selectCategory }: Props) {
  return (
    <div className=' overflow-x-auto'>
      <div className='flex gap-3 w-[max-content]'>
        {
          categoryList.map(category => (
            <Button variant={activeCategory === category ? "primaryActive" : "primary"}
              size={'default'}
              className='px-2 py-1 '
              onClick={() => selectCategory(category)}
            >
              {category}
            </Button>
          ))
        }
      </div>
    </div>
  )
}

export default memo(CategoryList)