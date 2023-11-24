import { FC } from 'react'
import NavbarItem from './NavbarItem'

const NavbarList: FC = () => {
    return <>
        <NavbarItem title='Home' active />
        <NavbarItem title='TV Shows' />
        <NavbarItem title='Movies' />
        <NavbarItem title='New & Popular' />
        <NavbarItem title='My List' />
        <NavbarItem title='Browse by Languages' />
    </>
}

export default NavbarList