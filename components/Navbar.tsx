import { navItems } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:'>
                <div className='flex justify-between items-center h-16'>
                    {/* <div> */}
                    <h1 className='text-2xl font-black font-heading text-primary '>Fit Hub</h1>
                    {/* </div> */}

                    {/* Desktop Navigation */}
                    <div className='hidden md:block'>
                        <div className='flex items-baseline space-x-8'>
                            {navItems.map(item => (<Link className='text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300' href={item.href} key={item.name}>{item.name}</Link>))}
                        </div>
                    </div>

                    {/* Join now btn */}
                    <div className='hidden md:flex items-center space-x-4'>
                        <Button className='font-semibold'>Join Now</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar