import { Button } from '../../../components'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Logo } from '../../../assets'
import { useSidebarContext } from '../../../contexts/SidebarContext'

type Props = {
  show?: boolean
}

function HeaderFirstSection({ show = false }: Props) {
  const { toggle } = useSidebarContext()
  return (
    <div className={` gap-2  md:gap-3 flex-shrink-0 ${show ? "hidden sm:flex" : "flex"}`}>
      <Button variant={"ghost"} onClick={toggle} >
        <Bars3Icon className="size-6 stroke-primary-700" />
      </Button>
      <a href="/">
        <img className=" h-10" src={Logo} alt="Logo" />
      </a>
    </div>
  )
}

export default HeaderFirstSection