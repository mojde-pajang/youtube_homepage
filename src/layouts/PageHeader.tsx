import { Bars3Icon, PlusCircleIcon, BellIcon, UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import logo from "../assets/logo.png"
import { Button } from "../components"
import { MicrophoneIcon } from "@heroicons/react/24/solid"
function PageHeader() {
  return (
    <div className=" flex justify-between p-4">
      <div className=" flex gap-2  md:gap-3 flex-shrink-0 ">
        <Button variant={"ghost"} >
          <Bars3Icon className="size-6 stroke-primary-700" />
        </Button>
        <a href="/">
          <img className=" h-10" src={logo} alt="Logo" />
        </a>
      </div>
      {/* items-center justify-center gap-3 */}
      <form className="hidden sm:flex flex-grow justify-center gap-2  md:gap-3 ">
        <div className=" flex flex-grow max-w-[600px]">
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

      <div className="flex gap-2  md:gap-3 flex-shrink-0 ">
        <Button variant={"ghost"} className="sm:hidden" >
          <MagnifyingGlassIcon className="size-6 stroke-primary-700" />
        </Button>
        <Button variant={"ghost"} className="sm:hidden" >
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