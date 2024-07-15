import { useState } from "react"
import { CategoryList } from "./components"
import PageHeader from "./layouts/PageHeader"
import { categories } from "./lib/constant"

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  return (
    <div className='min-h-screen flex flex-col'>
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] gap-7 flex-grow-1 overflow-auto">
        <div>Sidebar</div>
        <div className=" overflow-x-hidden">
          <div className=" sticky top-0 bg-white z-10 pb-3 whitespace-nowrap">
            <CategoryList categoryList={categories}
              activeCategory={activeCategory}
              selectCategory={setActiveCategory}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
