import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function LargeSection({ children }: Props) {
  return (
    <div>{children}</div>
  )
}

export default LargeSection