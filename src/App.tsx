import { useState } from "react"
import { CategoryList, VideoItem } from "./components"
import { PageHeader, Sidebar } from "./layouts"
import { categories, videos } from "./lib/data"
import SidebarProvider from "./contexts/SidebarContext"

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col'>
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] gap-7 flex-grow-1 overflow-auto">
          <Sidebar />
          <div className=" overflow-x-hidden pr-7">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryList categoryList={categories}
                activeCategory={activeCategory}
                selectCategory={setActiveCategory}
              />

            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
              {videos.map(video => (
                <VideoItem key={video.id} {...video} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </SidebarProvider>
  )
}

export default App
