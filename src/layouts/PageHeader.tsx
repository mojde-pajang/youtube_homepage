import { Bars3Icon, PlusCircleIcon, BellIcon, UserIcon } from "@heroicons/react/24/outline"
import logo from "../assets/logo.png"
import { Button } from "../components"
function PageHeader() {
  return (
    <div className=" flex justify-between p-4">
      <div className=" flex gap-3 flex-shrink-0 ">
        <Button variant={"ghost"} >
          <Bars3Icon className="size-6 stroke-primary-700" />
        </Button>
        <a href="/">
          <img className=" w-28" src={logo} alt="Logo" />
        </a>
      </div>
      <div></div>
      <div className="flex gap-3 flex-shrink-0 ">
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