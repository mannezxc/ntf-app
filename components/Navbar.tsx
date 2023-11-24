"use client"

import { FC, useState } from 'react'
import NavbarItem from './NavbarItem'
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import NavbarList from './NavbarList'

const Navbar: FC = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    // const showMobileNav = {
    //     open: false
    // }

    return <nav className='flex justify-between fixed z-10 w-full py-7 px-20 text-[#DADADA]'>
        <div className='flex items-center'>
            <img className='h-10 transition-all delay-500 lg:mr-16 mr-8' src="/images/logo.png" alt="" />
            <ul className='flex-row gap-7 hidden xl:flex'>
                <NavbarList />
            </ul>
            <div className='relative text-[22px] xl:hidden '>
                <button className='flex items-center outline-none w-7 h-7 relative' onClick={() => setShowMobileNav(prev => !prev)}>
                    {/* Browse
                    <ChevronDownIcon className='ml-2 w-5' /> */}
                    <span className='burg' />
                </button>
                {showMobileNav && <ul className={`xl:hidden absolute top-8 flex-column`}>
                    <NavbarList />
                </ul>
                }
            </div>
        </div>
        <div className='flex items-center gap-8'>
            <button>
                <MagnifyingGlassIcon className='w-6' />
            </button>
            <button>
                <BellIcon className='w-6' />
            </button>
            <button className='flex items-center'>
                <img src="/images/default-blue.png" className='w-12 rounded mr-2' alt="" />
                <ChevronDownIcon className='w-5' />
            </button>
        </div>
    </nav>
}

export default Navbar