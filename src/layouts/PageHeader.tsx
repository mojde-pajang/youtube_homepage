import { Bars3Icon } from "@heroicons/react/24/outline"
import logo from "../assets/logo.png"
import { Button } from "../components"
function PageHeader() {
  return (
    <div className=" flex justify-between">
      <div className=" flex gap-3 flex-shrink-0">
        <Button variant={"ghost"} >
          <Bars3Icon className="size-6 stroke-black" />
        </Button>
        <a href="/">
          <img className=" w-28" src={logo} alt="Logo" />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default PageHeader