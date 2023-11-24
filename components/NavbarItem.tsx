import { FC } from 'react'

type NavbarProps = {
    title: string
    active?: boolean
}

const NavbarItem: FC<NavbarProps> = ({title, active}) => {
  return <li className={`cursor-pointer ${active && 'text-white font-bold'}`}>
    {title}
  </li>
}

export default NavbarItem