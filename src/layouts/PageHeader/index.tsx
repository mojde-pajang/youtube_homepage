import { PlusCircleIcon, BellIcon, UserIcon, MagnifyingGlassIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import { Button } from "../../components"
import { MicrophoneIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import HeaderFirstSection from "./components/HeaderFirstSection";
function PageHeader() {
  const [activeSearch, setActiveSearch] = useState(false);


  return (
    <div className=" flex justify-between p-4">
      <HeaderFirstSection show={activeSearch} />
      {/* items-center justify-center gap-3 */}
      <form className={`flex-grow justify-center gap-2  md:gap-3 ${activeSearch ? "flex" : "hidden sm:flex"} `}>
        {activeSearch && (<Button type="button" variant={"ghost"} onClick={() => setActiveSearch(false)} className=" flex-shrink-0 sm:hidden">
          <ArrowLeftIcon className=" w-6  stroke-primary-900" />
        </Button>)}
        <div className=" flex flex-grow max-w-[600px] ">

          <input type="text"
            placeholder="Search"
            className=" outline-none shadow-inner shadow-primary w-full   px-4 text-base border border-primary-400 focus:border-blue-500  rounded-l-full"
          />
          <Button type="submit" variant={"primary"} size={"default"} className=" rounded  px-5 rounded-r-full flex-shrink-0 border border-primary-400 border-l-0">
            <MagnifyingGlassIcon className=" w-5  stroke-primary-700" />
          </Button>
        </div>
        <Button type="button" className="flex-shrink-0" >
          <MicrophoneIcon className="size-6 " />
        </Button>
      </form>

      <div className={`flex-shrink-0 md:gap-2 ${activeSearch ? "hidden sm:flex" : "flex"
        }`}>
        <Button variant={"ghost"} className={`sm:hidden`} onClick={() => setActiveSearch(true)} >
          <MagnifyingGlassIcon className="size-6 stroke-primary-700" />
        </Button>
        <Button variant={"ghost"} className={`sm:hidden`} >
          <MicrophoneIcon className="size-6 stroke-primary-700" />
        </Button>
        <Button variant={"ghost"} >
          <PlusCircleIcon className="size-6 stroke-primary-700" />
        </Button>
        <Button variant={"ghost"} >
          <BellIcon className="size-6 stroke-primary-700" />
        </Button>
        <Button variant={"ghost"} >
          <UserIcon className="size-6 stroke-primary-700" />
        </Button>
      </div>
    </div>
  )
}

export default PageHeader